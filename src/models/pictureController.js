export class PictureController {
   static async getImg() {
    const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA')
    const { data } = await response.json()

    data.frontDate = Date.now() / 1000

    return data
   }
}