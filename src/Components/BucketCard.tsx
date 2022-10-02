import TaskCard from './TaskCard'
import { Bucket } from './model'

interface Props {
  bucketObj: Bucket;
}

const BucketCard = ({bucketObj}:Props) => {
  return (
    <div className='bucket col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6'>
      {bucketObj.Title}
      {bucketObj.Tasks.map((task) => (
        <TaskCard Title={task.Title} Description={task.Description} Status={task.Status} />
      ))}
    </div>
  )
}

export default BucketCard