

const Register=()=>{
    return(
        <main>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center"> 
      
      
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-white bg-primary border-primary">
            <h4 className="my-0 fw-normal">Enterprise</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
          </div>
        </div>
      </div>
    </div>

    <h2 className="display-6 text-center mb-4">Compare plans</h2>

    <div className="table-responsive">
             
    </div>
  </main>
    )
}
export default Register;