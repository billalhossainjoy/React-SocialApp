import { Link } from 'react-router-dom'
import { appwriteDatabase } from '.././appwrite/config';

function PostCard({$id,title, featuredImage}) {
    
  return (
    <>
        <Link to={`/post/${$id}`}> 
             <div>
                 <div>
                    <img src={appwriteDatabase.getFilePreview(featuredImage)} alt="" />
                 </div>
                 <h2>{title}</h2>
             </div>
        </Link>
    </>
  )
}

export default PostCard