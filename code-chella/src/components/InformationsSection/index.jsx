import Button from "components/Button";
import showImage from 'assets/images/programodromo.png';
import styles from './InformationsSection.module.css';


const InformationsSection = ({ title, children, hasButton }) => {
  return (
    <section>
      <div>
        <img src={showImage} alt="Pessoas assistindo um show" />
      </div>
      <div>
        <h6>{title}</h6>
        {children}
        {
          hasButton ?
            <div>
              <Button>Comprar ingresso!</Button>
            </div>
            :
            <></>
        }
      </div>
    </section>
  );
}

export default InformationsSection;