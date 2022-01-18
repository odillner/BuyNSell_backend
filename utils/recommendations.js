var similarity = require( 'compute-cosine-similarity' );


// TODO: HANDLE COLD STARTS 

// Item-recommender class
module.exports = class ItemRecommender{
    constructor(nr_recs=5, stopwords=[]){
		this.nr_recs = nr_recs;
        this.stopwords = stopwords;

        this.corpus = [];
        this.doc_word_count = {};
        this.doc_words_total = {};
        this.matrix;
        
	}

    get_recommendations(items, item_id){
        this._fill_tf_matrix(items)
        let similar_items = this._similar_items(this.matrix, item_id)
        similar_items = similar_items.filter(indx => indx != this._itemID_to_indx[item_id]) // dont return self
        let recs = similar_items.map(indx => this._indx_to_item[indx])
        return recs.slice(0, this.nr_recs) 
    }

    // returns sorted list of similar items based on document similarity
    _similar_items(tf_matrix, current_id){

        let current_item = tf_matrix[this._itemID_to_indx[current_id]]
        let similarities = {}; // item index in matrix -> similarity score
    
        for (let doc=0; doc < tf_matrix.length; doc++){
            let item_rankings = tf_matrix[doc]
            let cosine_sim = similarity(current_item, item_rankings)
            if (isNaN(cosine_sim)){
                cosine_sim = 0;      // Handle case in which cosine sim is not defined <=> one vector all zeros
            }
            similarities[doc] = cosine_sim          
        }
        let similar_indxs = this._sort_dictionary(similarities)
        return similar_indxs 
    }
    
    // return sorted list of items based on document similarity dictionary
    // TODO: CAN THIS BE DONE BETTERLY?
    _sort_dictionary(doc_similarities){
        let sorted_indxs = Object.keys(doc_similarities).sort((a, b) => {
                                    return doc_similarities[a]-doc_similarities[b]
                                })
        return sorted_indxs.reverse()
    }

    /*
        calculates term-frequency matrix
        -----------------------------------
              word1 word2  word3  
        desc1  f11   f12    f13
        desc2  f21   f22    f23
        desc3  f31   f32    f33 

    */
    _fill_tf_matrix(items){
        this.corpus = [];
        this.doc_word_count = {};
        this.doc_words_total= {};
        this.word_to_docs = {};  // a list for each word containing documents in which word appears
        this.nr_docs = 0
        this._itemID_to_indx = {};
        this._indx_to_item = {};

        // calculate document/word statistics
        for (let item of Object.values(items)){
            let item_desc = item.desc;
            let item_desc_tokens = this._tokenize(item_desc)
            let item_id = item.id // TODO: CHANGE THIS
            this.doc_word_count[item_id] = {};
            this.doc_words_total[item_id] = item_desc_tokens.length;
            this.nr_docs++;            
            for (let word of item_desc_tokens){

                if(this.word_to_docs[word] === undefined){
                    this.word_to_docs[word] = [];
                }
                this.word_to_docs[word].push(item_id)

                if(this.doc_word_count[item_id][word] === undefined){
                    this.doc_word_count[item_id][word] = 0;
                }
                this.doc_word_count[item_id][word]++;
                this.corpus.push(word);       
            }
        }
        // corpus should only contain unique words
        this.corpus = [... new Set(this.corpus)];
        // create term-frequency matrix
        this.matrix = [];
        let item_count = 0;
        for (let item of Object.values(items)){
            let item_id = item.id 
            this._itemID_to_indx[item_id] = item_count;
            this._indx_to_item[item_count] = item;
            this.matrix[item_count] = [];
            let word_count = 0;
            for (let word of this.corpus){
                this.matrix[item_count][word_count] = this._term_frequency(item_id, word) * this._inv_doc_freq(word)
                word_count++;
            }
            item_count++;

        } 
    }

    /*
        term frequence per document
    */
    _term_frequency(document, word){
        if (this.doc_word_count[document][word] !== undefined){
            return this.doc_word_count[document][word] / this.doc_words_total[document];
        } else {
            return 0;
        }
    }

    /*
        inverse document frequency
        words that occur in many documents should have lower importance
    */
    _inv_doc_freq(word){
        let docs_with_word = this.word_to_docs[word]
        let unique_docs = [... new Set(docs_with_word)];
        return Math.log(this.nr_docs/unique_docs.length)

    }

    _prepreocess(desc){
        // TODO: remove stop words
        // TODO: remove unwanted tokens
        desc = desc.toLowerCase();
        return desc
    }

    _tokenize(desc){
        return this._prepreocess(desc).split(" ");
    }

}

// TEST JSON INPUT
input_test = {
        
        "item_1":  {
            "title": "test item 1",
            "desc": "Blue soffa"
           
        },
        "item_2": {
            "title": "test item 2",
            "desc": "Red soffa"
        },
        "item_3": {
            "title": "test item 3",
            "desc": "Orange car with nice seats"
        },
        "item_4": {
            "title": "test item 4",
            "desc": "Car with nice seats"
        },
        "item_5": {
            "title": "test item 5",
            "desc": "Blue"
        }  
}


/*
var time_start = new Date();
recommender = new ItemRecommender(nr_recs=1)
recs = recommender.get_recommendations(input_test, "test item 3")
console.log(recommender.doc_word_count)
console.log("Recommendations: " + recs)

var time_end = new Date();

var diff = (time_end - time_start)/1000; //seconds interval
console.log("Execution time: " + diff)
*/
