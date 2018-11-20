
    export class Collection {
        constructor () {
            this.medias = []
        }

        addMedia (media) {
            this.medias.push(media)
        }

        removeMedia (media) {
            this.medias = this.medias.filter(function (other) {
                return media !== other
            })
        }

        getNbMedias () {
            return this.medias.length
        }

        filter (filterFn) {
            return this.medias.filter(filterFn)
        }
    }



// export let medias = [];

// export function addMedia(media){
//     medias.push(media);
// }

// export function removeMedia(media){
//     medias = medias.filter(function(other){
//         return media !== other
//     })
// }

// export function getNbMedias(){
//     return medias.length
// }

// export function filter(filterFn){
//     return medias.filter(filterFn)
// }

// export function value(){
//     return medias
// }