import React, { useEffect, useState } from 'react';
import './App.css';
import BucketCard from './Components/BucketCard'
import data from './Components/data.json'
import { Bucket } from './Components/model'

const App = () => {

  const[buckets, setBuckets] = useState<Bucket[]>([])

  const getData = () => {
    setBuckets(data.Buckets)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className='navbar mainNav'>
        <div className='navbar-brand'>Task</div>
      </div>
      <div className='container-fluid mainContainer'>
        <div className='row flex-row flex-nowrap'>
          {buckets && buckets.map((bucket) => (
            <BucketCard bucketObj={bucket} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
