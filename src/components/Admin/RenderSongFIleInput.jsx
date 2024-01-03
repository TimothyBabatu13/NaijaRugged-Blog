
const RenderSongFIleInput = ({handleSelectSongFile, accept}) => {
  return (
    <div style={{"margin":"10px 0"}}>
      <input onChange={handleSelectSongFile} type="file" accept={accept ? ".mp3, audio/*": "video/*"} name="" id="audioFile" />
      <label htmlFor="audioFile">{accept ? "Audio file" : "Movie file"}</label>
    </div>
  )
}

export default RenderSongFIleInput