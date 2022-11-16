import { Fragment, useState } from "react"
import { useAddVideo, useGetAllVideos } from "../hooks/useVideo"

const Videos = () => {
  const [title, setTitle] = useState('')
  const [descroption, setDescroption] = useState('')
  const [url, setUrl] = useState('')
  const [duration, setDuration] = useState('')
  // react qurey
  const { data } = useGetAllVideos()
  const { mutateAsync } = useAddVideo()
  // console.log(data)
  const handleSubmit = async () => {
    try {
      const body = {
        title, descroption, url, duration
      }
      await mutateAsync(body)
      // console.log(body)
    } catch (error) {
      // console.log(error)
    }
  }
  return (
    <div>
      <form noValidate>
        <input type="text" name="title" onChange={e => setTitle(e.target.value)} />
        <input type="text" name="descroption" onChange={e => setDescroption(e.target.value)} />
        <input type="text" name="url" onChange={e => setUrl(e.target.value)} />
        <input type="text" name="duration" onChange={e => setDuration(e.target.value)} />
        <br />

      </form>
      <button onClick={handleSubmit}>Submit</button>
      {
        data.map(i => <Fragment key={i._id}>
          <h6>{i.title}</h6>
        </Fragment>)
      }
    </div>
  )
}

export default Videos