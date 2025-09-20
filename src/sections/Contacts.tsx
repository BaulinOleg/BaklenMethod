import Map from '@/components/map/MapClient'
import SocialList from "@/components/ui/SocialList"
import Consultation from "@/components/popup/Consultation";


export default function Contacts() {
  return (
    <section className="section contacts" id="contacts">
        <div className="contacts__wrapper">
          <Map className="contacts__map" position={[55.8228275, 37.6049373]}/>
          <div className="contacts__inner">
            <h2>Наши контакты</h2>
            <div className="contacts__links">
              <a
                className="contacts__link"
                href="tel:+79999999999"
              >
                +7 (999) 999-99-99
              </a>
              <a
                className="contacts__link"
                href="mailto:info@baklen.site"
              >
                info@baklen.site
              </a>
            </div>
            <address className="contacts__address">Москва, ул. Академика Королева д.12</address>
            <SocialList className="contacts__social"/>
          </div>
        </div>
        <div className="contacts__slogan-inner">
          <div className="contacts__slogan">
            <p>Мы не двигаемся, пока живем.</p>
            <p><span>Мы живем,<br/> пока двигаемся!</span></p>
          </div>
          <Consultation />
        </div>
    </section>
  );
}