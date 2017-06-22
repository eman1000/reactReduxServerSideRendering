import { getFakeData } from "../src/routes/Home/module";

describe("getFakeData", () => {
  describe("when triggered", () => {
    it("it gets ab oject from the an api", () => {
        test("ayncGetData get an array object", () => {
            const startState = {
                dummyData: {}
            };

            const finState = asyncGetData(dummyData);

            expect(finState.dummyData).toEqual({
                "totalHits": 500,
                "hits": [{
                    "previewHeight": 99,
                    "likes": 176,
                    "favorites": 187,
                    "tags": "hotel, architectural, tourism",
                    "webformatHeight": 426,
                    "views": 53962,
                    "webformatWidth": 640,
                    "previewWidth": 150,
                    "comments": 51,
                    "downloads": 19636,
                    "pageURL": "https://pixabay.com/en/hotel-architectural-tourism-travel-389256/",
                    "previewURL": "https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_150.jpg",
                    "webformatURL": "https://pixabay.com/get/ea3db80d2df21c2ad65a5854e34b4697e674eac818b5184994f1c57ea4e4_640.jpg",
                    "imageWidth": 1920,
                    "user_id": 331410,
                    "user": "GregoryButler",
                    "type": "photo",
                    "id": 389256,
                    "userImageURL": "",
                    "imageHeight": 1280
                }]
            });
            });

    });
  });
});