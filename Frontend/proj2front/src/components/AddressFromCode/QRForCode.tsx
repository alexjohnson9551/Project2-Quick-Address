import React from 'react'
import QRCode from 'qrcode.react'
import './QRForCode.css'

const QRForCode = ({id, qrHandler}:{qrHandler:(qrId: string) => void,id:string|number}) => {

  return (
    <>
    <div className="qr-formatting">
      <QRCode size={400} onClick={()=>qrHandler(""+0)} value={"http://localhost:8080/View/"+id+""} />
    </div>
  </>
  )
}
export default QRForCode