import Api from './apiConfig'

export const getSongs = async (page, page_size) => {
   try {
      const response = await Api.axiosInstance().get(
         `chart.tracks.get?page=${page}&page_size=${page_size}&country=us&f_has_lyrics=1`
      )
      return response?.data?.message?.body?.track_list
   } catch (e) {
      console.log(e)
   }
}

export const searchSongs = async (page, page_size, q_track) => {
   try {
      const response = await Api.axiosInstance().get(
         `track.search?page=${page}&page_size=${page_size}&q_track=${q_track}&country=us&f_has_lyrics=1`
      )
      return response?.data?.message?.body?.track_list
   } catch (e) {
      console.log(e)
   }
}
