import {createClient} from 'contentful'

const client = createClient({
	accessToken: 'c1f88dc79eff05c4a641cf1e456f860b171a387546ebb121dd74f168e23097e5',
	space: '6rodfzoot865'
});

class ContentfulAPIHelper
{
    constructor()
    {

    }
    static GetAllContentFromContentfulOfType(content_type){
        return new Promise(function (resolve, reject) {
            client.getEntries({"content_type": content_type})
                .then((entries) => {
                // log the title for all the entries that have it
                    entries.items.forEach(function (entry) {
                        console.log(entry.fields)
                    })
                    resolve (entries);
                })
                .catch(function(error){
                    console.log(error)
                    reject(error);
                });
        })
    }

    static GetContentFromContentfulOfID(content_ID){
        return new Promise(function (resolve, reject) {
            client.getEntry(content_ID)
            .then(function (entry) {
                resolve (entry);
            })
            .catch(function(error) {
                reject(error);
            });

        })
    }

    static GetAssetFromContentfulOfID(asset_ID){
        return new Promise(function (resolve, reject) {
            client.getAsset(asset_ID)
            .then(function (asset) {
                resolve (asset);
            })
            .catch(function(error) {
                reject(error);
            });

        })
    }
}

export default ContentfulAPIHelper