

const SingleCard = ({imgurl,cardtext}) => {
  return (
    <>
    <section>
        <div className="text-center p-5 max-w-xs">
            <div className="flex justify-center">
                <img src={imgurl} alt="" />
            </div>
            <p className="mt-3">{cardtext}</p>

        </div>
    </section>
    
    </>
  )
}

export default SingleCard