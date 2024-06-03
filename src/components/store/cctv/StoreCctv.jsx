import React, { useEffect, useRef } from 'react'

const StoreCctv = () => {

  let videoRef = useRef(null)

  const getUserCamera = () => {
    navigator.mediaDevices.getUserMedia({
      video:true
    })
    .then((stream) => {
      let video = videoRef.current
      video.srcObject = stream
      video.play()
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getUserCamera()
  },[videoRef])

  return (
    <>
      <div className='w-full flex font-[Pretendard] text-white justify-center'>
        <div className='w-full'>
          <div className='flex justify-start px-20 py-10'>
            <div className='min-w-[250px]'>
              <div className='font-bold text-[38px] min-w-1/2'>CCTV</div>
              <div className='text-black'>
                <select className='w-[150px]'>
                  <option>스마트프리즘</option>
                  <option>터치포인트</option>
                  <option>스마트셀프</option>
                </select>
              </div>
            </div>
          </div>

          <div className='w-full flex justify-center'>
            <div className='w-full md:w-[80%] lg:w-[60%] p-4 font-bold flex-col space-y-4'>
              <div className='flex justify-center'>
                <div className='w-full aspect-w-16 aspect-h-9'>
                  <video className='w-full h-full object-cover transform -scale-x-100' ref={videoRef}></video>
                </div>
              </div>

              <div className='w-fit'>
                <div className='h-1/2 text-[18px]'>
                  <p>20XX.XX.XX.X요일 00:00:00</p>
                </div>
                <div className='h-1/2 text-[18px]'>
                  <p>감지 횟수 : N</p>
                </div>
              </div>

              <div className='flex justify-center'>
                <label className='w-full'>
                  <textarea className='w-full p-2 text-black' placeholder='로그백 내용' rows={5} cols={105} />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StoreCctv