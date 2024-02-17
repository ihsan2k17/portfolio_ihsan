import { Link, useParams } from "react-router-dom";
import { IDataProject, EndDumy } from "../../../components/constants/Project";
import Navbar from "../../../components/navbar/navbar/Navbar";
import detailProjectStyles from './detailproject.module.css';
import { FaCircleCheck } from "react-icons/fa6";
import Footer from "../../../components/footer/Footer";
import ImageSlider from "../../../components/scroll/slider/productslider/ImageSlider";
interface props {
  dataProject: IDataProject[]
}
const DetailsProject = ({ }: props) => {
  const { ProjectId } = useParams<{ ProjectId?: string }>();
  const projectData = EndDumy.find(item => item.id === parseInt(ProjectId ?? '0', 10));
  if (!ProjectId || !projectData) {
    return <div>{!ProjectId ? 'ID Invalid' : 'Data not found'}</div>;
  }
  const total = EndDumy.length
  const nextPage = projectData.id <= total - 1 ? `/Project/${projectData.id + 1}` : '';
  const previousPage = projectData.id > 1 ? `/Project/${projectData.id - 1}` : '';
  return (
    <div>
      <Navbar />
      <div className={detailProjectStyles.detailProject}>
        <h1 className={detailProjectStyles.title}>{projectData.name}</h1>
        <p className={detailProjectStyles.subtitle}>{projectData.description}</p>
        <div className={detailProjectStyles.containerInformation}>
          <div className={detailProjectStyles.information}>
            <p className={detailProjectStyles.titleInformation}>Category</p>
            <p className={detailProjectStyles.subtitleInformation}>{projectData.type}</p>
          </div>
          <div className={detailProjectStyles.information}>
            <p className={detailProjectStyles.titleInformation}>ORM</p>
            <p className={detailProjectStyles.subtitleInformation}>{projectData.orm}</p>
          </div>
          <div className={detailProjectStyles.information}>
            <p className={detailProjectStyles.titleInformation}>Framework</p>
            <p className={detailProjectStyles.subtitleInformation}>{projectData.framework}</p>
          </div>
          <div className={detailProjectStyles.information}>
            <p className={detailProjectStyles.titleInformation}>Database</p>
            <p className={detailProjectStyles.subtitleInformation}>{projectData.database}</p>
          </div>
        </div>
        <div className={detailProjectStyles.containerImage}>
          <ImageSlider Slides={projectData.Gambar} alt={projectData.type} />
        </div>
        <div className={detailProjectStyles.containerFeatures}>
          <h1 className={detailProjectStyles.titleFeatures}>Features</h1>
          {projectData.features.map((data, index) => (
            <p key={index} className={detailProjectStyles.subtitleFeatures}>
              <FaCircleCheck /> {data}
            </p>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', gap: '20px', padding: "10px 25px", margin:'0' }}>
        {nextPage ? (
          <Link to={nextPage} key={`next-${projectData.id}`}>
            <div style={{ color: 'white' }}><h1 className={detailProjectStyles.titlePage}>Next</h1></div>
          </Link>
        ) : (
          <div style={{ color: 'white' }}><h1></h1></div>
        )}
        {previousPage ? (
          <Link to={previousPage} key={`previous-${projectData.id}`}>
            <div style={{ color: 'white' }}><h1 className={detailProjectStyles.titlePage}>Previous</h1></div>
          </Link>
        ) : (
          <div style={{ color: 'white' }}><h1></h1></div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default DetailsProject