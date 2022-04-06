import group from '../../assets/Group 1.jpg';
import './blogCard.scss'

const BlogCard = () => {
    return (
        <div className='blog-card row m-2 d-flex justify-content-center align-items-center'>
            <p className='name-blog '>MORE THAN 1,000,000 KG OF WASTE</p>
            <div className="d-flex justify-content-center align-items-center " >
                <img className='imgGroup' src={group} alt="" />
            </div>
            <p className='section-card '>LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM</p>
        </div>
    )
}
export default BlogCard