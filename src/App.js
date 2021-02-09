import logo from './img/logo.svg';
import leadimage from './img/image.jpg';
import itemtrain from './img/itemtrain.jpg';
import itematharvatulsi from './img/itematharvatulsi.jpg';
import itemtuman from './img/itemtuman.jpg';
import itemsochi from './img/itemsochi.jpg';
import itemarisa from './img/itemarisa.jpg';
import itembaikal from './img/itembaikal.jpg';
import itemelbrus from './img/itemelbrus.jpg';
import itemstanislav from './img/itemstanislav.jpg';
import itemkamchatka from './img/itemkamchatka.jpg';
import itemkamchatka2 from './img/itemkamchatka2.jpg';
import itembaikal2 from './img/itembaikal2.jpg';
import itemergaki from './img/itemergaki.jpg';
import itemkosa from './img/itemkosa.jpg';
import itemkolski from './img/itemkolski.jpg';
import altai from './img/altai.jpg';
import zimniibakal from './img/zimniibakal.png';
import kapelia from './img/kapelia.png';
import iconplay from './img/iconplay.svg';
import viktor from './img/viktor.jpg';
import ivan from './img/ivan.jpg';
import sergei from './img/sergei.jpg';


import './App.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип - карта Россия" />
        <a className="header__lang header__lang_active" href="#">Ru</a>
        <a className="header__lang " href="#">En</a>
      </header>
      <main className="content">
        <section className="lead">
          <h1 className="lead__title">Путешествия по России</h1>
          <p className="lead__subtitle">Настоящая страна не в выпусках новостей, а здесь.</p>
          <figure className="lead__content">
            <img className="lead__image" src={leadimage} alt="Путешествия по России" />
            <figcaption className="lead__caption">ваша полка — верхняя</figcaption>
          </figure>
        </section>
        <section className="intro">
          <h2 className="intro__title">Чего мы там не видели?</h2>
          <p className="intro__content-row-text">
            По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% планируют
            провести отпуск в родной стране. Мол, чего мы тут, дома, не видели? На самом деле, Россия — это
            целая
            вселенная с ласковым морем юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть
            все
            эти красоты можно без миллионов на счету, загранпаспорта и многочасовых перелетов. Как, например,
            Вера
            Башмакова — смелая молодая мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и
            проехала
            20 тысяч километров по родной стране. Мы выбрали и описали некоторые интересные места, достойные
            вашего
                отпуска.</p>
          <div className="intro__text">
            <p className="intro__paragraph">Часовых поясов <span className="intro__span">11</span></p>
            <p className="intro__paragraph">Объектов природного наследия ЮНЕСКО <span className="intro__span">12</span>
            </p>
            <p className="intro__paragraph"> Объектов культурного наследия ЮНЕСКО <span className="intro__span">16</span>
            </p>
            <p className="intro__paragraph">Природных заповедников <span className="intro__span">105</span></p>
            <p className="intro__paragraph">Аэропортов <span className="intro__span">241</span></p>
          </div>

        </section>
        <section className="photo-grid">
          <img className="photo-grid__item" src={itemtrain} alt="картика -Поезд" />
          <img className="photo-grid__item" src={itematharvatulsi} alt="картика - ГОРЫ" />
          <img className="photo-grid__item" src={itemtuman} alt="картика- ТУМАН" />
          <img className="photo-grid__item" src={itemsochi} alt="картика - СОЧИ" />
          <img className="photo-grid__item" src={itemarisa} alt="картика - АРИСА" />
          <img className="photo-grid__item" src={itembaikal} alt="картика - БАЙКАЛ" />
          <img className="photo-grid__item" src={itemelbrus} alt="картика - ЕЛБРУС" />
          <img className="photo-grid__item" src={itemstanislav} alt="картика - СТАНИСЛАВ" />
          <img className="photo-grid__item" src={itemkamchatka} alt="картика - КАМЧАТКА" />
          <img className="photo-grid__item" src={itemkamchatka2} alt="картика - КАМЧАТКА" />
          <img className="photo-grid__item" src={itembaikal2} alt="картика - БАЙКАЛ" />
          <img className="photo-grid__item" src={itemergaki} alt="картика - ЕРГАКИ" />
        </section>
        <section className="places">
          <div className="place">
            <h3 className="place__title">Куршская коса</h3>
            <div className="place__url">
              <p className="place__heading">URL</p>
              <a className="place__link" href="park-kosa.ru" target="_blank">park-kosa.ru</a>
            </div>
            <img className="place__card" src={itemkosa} alt="Куршская коса" />
            <div className="place__text">
              <p className="place__paragraph">Здесь, посреди лесов и песчаных дюн, вы сможете увидеть
              два водных
              горизонта — спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского
              моря с
                        другой. Уникальная природная зона на краю российского анклава.</p>
              <p className="place__paragraph">На этом Калининградская область не заканчивается. Для
              путешественника
              и
              исследователя там же по соседству — самая западная точка России, Балтийская коса, — и немецкое
              наследие россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная в
                        спокойствие природы и запах стального, прохладного моря.</p>
            </div>
          </div>
          <div className="place">
            <h3 className="place__title">Кольский</h3>
            <div className="place__url">
              <p className="place__heading">URL</p>
              <a className="place__link" href="https://yourshot.nationalgeographic.com/photos/?keywords=kolskiy"
                target="_blank">National Geographic</a>
            </div>
            <img className="place__card" src={itemkolski} alt="Кольский" />
            <div className="place__text">
              <p className="place__paragraph">Почти весь полуостров находится за Полярным кругом.
              Саамская тундра, от которой на юг — тайга, а на север — Ледовитый океан, прикидывающийся
                        Баренцевым морем.</p>
              <p className="place__paragraph">Возможно, вы смотрели Звягинцева и даже слышали историю
              арктического фестиваля в Териберке. Возможно, слово «Хибины» не осталось под снегом школьных
              воспоминаний об уроках географии. Возможно, вы не интересовались пронизывающей земную кору
              сверхглубокой скважиной, а от апатитов вас давно накрывает апатия. Но ваша мечта увидеть
                        северное сияние начинает сбываться с билетом в Мурманск.</p>
            </div>
          </div>
          <div className="place">
            <h3 className="place__title">Алтай</h3>
            <div className="place__url">
              <p className="place__heading">URL</p>
              <a className="place__link" href="https://www.facebook.com/vera.bashmakova/posts/10156011613718822"
                target="_blank">Facebook</a>
            </div>
            <img className="place__card" src={altai} alt="Алтай" />
            <div className="place__text">
              <p className="place__paragraph">Алтай — одно из красивейших мест в России. В первую
              очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и
              озёра. А если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом здешних
                        мест — горным воздухом.</p>
              <p className="place__paragraph">Климат на Алтае умеренный, поэтому ехать сюда лучше
              всего летом. Так вы увидите всё разнообразие местной флоры и фауны. По лесам Алтая бродят лоси,
              над хребтами летают орлы, а на равнинах пасутся косули. И знаменитые манулы — тоже обитатели
                        Алтайского края.</p>
            </div>
          </div>
          <div className="place">
            <h3 className="place__title">Зимний Байкал</h3>
            <div className="place__url">
              <p className="place__heading">URL</p>
              <a className="place__link" href="https://vk.com/baikalmile "
                target="_blank">https://vk.com/baikalmile</a>
            </div>
            <img className="place__card" src={zimniibakal} alt="Зимний Байкал" />
            <div className="place__text">
              <p className="place__paragraph">Всем известен Байкал как крупнейшее озеро в мире.
              Многие также знают, что это самый большой источник пресной воды и одно из красивейших мест в
                        России.</p>
              <p className="place__paragraph">Конечно, это всё так. Но Байкал ещё идеальное место
              для соревнований по скийорингу. Это такой вид спорта, когда лыжник привязывает себя к мотоциклу,
              и тандем старается развить как можно бóльшую скорость на льду. В марте 2019 года на фестивале
                        «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.</p>
            </div>
          </div>
          <div className="place">
            <h3 className="place__title">Карелия</h3>
            <div className="place__url">
              <p className="place__heading">URL</p>
              <a className="place__link " href="http://vodlozero.ru/" target="_blank">http://vodlozero.ru/</a>
            </div>
            <img className="place__card" src={kapelia} alt="Карелия" />
            <div className="place__text">
              <p className="place__paragraph">Сибирь заканчивается не на Урале, а в Карелии:
              образующая тайгу сибирская лиственница не растёт западнее Водлозера. Зато здесь она вымахивает
              на 30 метров — леса карельских национальных парков из-за непроходимых болот никогда не знали
              топора. Некоторым соснам уже больше чем полтысячелетия. Прикоснитесь к живому существу,
              видевшему солнце раньше, чем увидал его Иван Грозный. В девственном лесу на сотню километров не
              встретишь тропы. А на редких тропинках деревья в паре метров от земли помечены медвежьими
                        когтями. Чтобы все знали, кто тут хозяин.</p>

            </div>
          </div>
        </section>
        <section class="video">
          <h3 class="content-title">В глубины Земли и в дальний космос </h3>
          <p class="content-subtitle">Видео от студии Stereotactic о местах в России, где ведутся
                фундаментальные исследования</p>
          <div class="container">
            <div class="container__item container__item_cok">
              <a class="container__link" href="https://vimeo.com/81106671">
                <img class="container__icon-play" src={iconplay} alt="play" />
                <p class="container__duration">6:30</p>
                <h4 class="container__title">Colors of Kamchatka
                        </h4>
                <p class="container__subtitle">Director: Pavel Karykhalin</p>
              </a>
            </div>
            <div class="container__item container__item_obs">
              <a class="container__link" href="https://vimeo.com/290675450">
                <img class="container__icon-play" src={iconplay} alt="play" />
                <p class="container__duration">24:45</p>
                <h4 class="container__title">Обсерватория | Observatory
                        </h4>
                <p class="container__subtitle">Director: Alexander Khudokon </p>
              </a>
            </div>
          </div>
        </section>
        <section class="comments">
          <h3 class="content-title">Фотографы, снимающие Россию</h3>
          <p class="content-subtitle">Природа и люди вдохновили их работы, удостоенные наград на
                международных конкурсах</p>
          <div class="comments__container">
            <div class="comment">
              <img class="comment__image" src={viktor} alt="Виктор Лягушкин" />

              <blockquote class="comment__quote">«Если вам кажется, что в России ничего не происходит, то просто
                        выгляньте “наружу”…»</blockquote>

              <p class="comment__author">Виктор Лягушкин</p>
            </div>
            <div class="comment">
              <img class="comment__image" src={ivan} alt="Иван Хафизов" />
              <blockquote class="comment__quote">«Если в город едут туристы — неважно за чем они туда едут: за
              шамбалой или фрески Рублева искать, или на родину Тарковского — туристы обеспечивают любой город
                        молодёжью, рабочими местами и в конечном счёте наполняют его жизнью.»</blockquote>
              <p class="comment__author">Иван Хафизов
                    </p>
            </div>
            <div class="comment">
              <img class="comment__image" src={sergei} alt="Сергей Максимишин" />
              <blockquote class="comment__quote">«Ты приезжаешь, и люди рассказывают тебе, как им плохо. А когда
                        ты покажешь, как им плохо, то ты сволочь и всё очернил.»</blockquote>
              <p class="comment__author">Сергей Максимишин
                    </p>
            </div>
          </div>
        </section>
        <section class="cover">
          <a class="cover__link" href="https://stampsy.com/na-elektrichkakh-do-baikala">
            <h4 class="cover__title">До Байкала «на собаках»</h4>
            <p class="cover__subtitle">По мотивам учебной темы о Транссибе и iframes — путешествие от столицы до
            Байкала
                    на электричках.</p>
          </a>
        </section>
        <footer class="footer">
          <nav class="footer__links">
            <ul class="footer__nav">
              <li><a class="footer__link" href="https://yandex.ru/maps/" target="_blank">Карты</a></li>
              <li><a class="footer__link" href="https://yandex.ru/pogoda/" target="_blank">Погода</a></li>
              <li><a class="footer__link" href="https://rasp.yandex.ru/" target="_blank">Расписание</a></li>
              <li><a class="footer__link" href="https://calendar.yandex.ru/" target="_blank">Календарь</a></li>
              <li><a class="footer__link" href="https://travel.yandex.ru" target="_blank">Путешествия</a></li>
            </ul>
          </nav>
          <p class="footer__copyright">&copy; 2020. Nguyen Tuan Anh</p>

        </footer>
      </main>
    </div>
  );
}

export default App;
