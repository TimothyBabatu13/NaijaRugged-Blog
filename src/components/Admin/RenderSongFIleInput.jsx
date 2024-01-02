
const RenderSongFIleInput = ({handleSelectSongFile}) => {
  return (
    <div style={{"margin":"10px 0"}}>
                    <input onChange={handleSelectSongFile} type="file" accept=".mp3, audio/*" name="" id="audioFile" />
                    <label htmlFor="audioFile">Audio file</label>
                </div>
  )
}

export default RenderSongFIleInput