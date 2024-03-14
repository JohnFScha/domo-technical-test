function CaseOne() {
  return (
      <article className="card w-[35%] bg-primary text-primary-content absolute top-[315%] left-[10%]">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </article>
  )
}

function CaseTwo() {
  return (
      <article className="card w-[35%] bg-primary text-primary-content absolute top-[315%] right-[10%]">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </article>
  )
}

export {CaseOne, CaseTwo}