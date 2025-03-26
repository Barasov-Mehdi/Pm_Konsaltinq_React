import React, { useState } from 'react';
import img1 from '../../assets/DVX1.jpg';
import img2 from '../../assets/muhasibat_ucotu.jpg';
import img3 from '../../assets/issiz_sogorta.jpg';
import img4 from '../../assets/reforma.jpg';
import '../../scss/InfoPages.scss'

function InfoPages() {
    const [activeCardIndex, setActiveCardIndex] = useState(null);

    const infoList = [
        {
            img: img1,
            title: 'Azərbaycanda şirkətlərin qeydiyyat məlumatlarında dəyişikliklər elektron qaydada həyata keçiriləcək',
            content: `İqtisadiyyat Nazirliyi yanında Dövlət Vergi Xidməti məhdud məsuliyyətli cəmiyyətlərin (MMC) təsis sənədlərində edilmiş dəyişikliklərin və reyestrdə qeydə alınmış faktların sonrakı dəyişikliyinin elektron qaydada qeydiyyata alınması imkanı yaradıb.

Bunu qurumun Vergi ödəyicilərinin qeydiyyatı və uçotu baş idarəsinin rəis müavini Hüsniyyə Abdullayeva bildirib.

Onun sözlərinə görə, artıq yerli və xarici investisiyalı MMC-lərin təsis sənədlərində edilmiş dəyişikliklərin və reyestrdə qeydə alınmış faktların sonrakı dəyişikliyinin qeydiyyatı ilə bağlı vergi orqanına elektron qaydada müraciət etmək mümkündür: "Biznes mühiti və beynəlxalq reytinqlər üzrə komissiyanın işçi qrupu çərçivəsində müzakirə olunan məsələlərdən biri MMC-lərin qeydiyyat məlumatlarında baş vermiş dəyişikliklərinin elektron qaydada qeydiyyata alınması ilə bağlı yeni rəqəmsal xidmətin tətbiqi olub.

Məlum olduğu kimi, buna qədər yalnız MMC-lərin ilkin qeydiyyatı elektron qaydada həyata keçirilirdi. DVX tərəfindən aparılan hüquqi, təşkilati və texniki tədbirlərdən sonra artıq şirkətlər təsis sənədlərində edilmiş dəyişikliklərin və reyestrdə qeydə alınmış faktların sonrakı dəyişikliyinin elektron qaydada qeydiyyata alınması üçün elektron ərizə ilə müraciət edə bilərlər".

H.Abdullayeva bildirib ki, MMC-lərin qeydiyyat məlumatlarının dəyişikliyinin elektron qaydada qeydiyyata alınması imkanından gücləndirilmiş elektron imza sahibləri istifadə edir və elektron məlumat dəyişikliyi 3 iş günü müddətində həyata keçirilir: "Müraciət zamanı internet vergi idarəsində yerləşdirilmiş elektron ərizə formasında dəyişiklik edilmiş məlumatlar (adı, hüquqi ünvanı, Müşahidə Şurasının tərkibi, qanuni təmsilçisi, MMC-nin təsisçiləri, nizamnamə kapitalı, nizamnaməyə dəyişiklik) doldurulur, dəyişikliyi təsdiq edən sənədlərin (auditor rəyi və yaxud bank qəbzi) skan olunmuş surəti ərizəyə əlavə edilir, ərizə və sənədlər təsisçilər və rəhbərin gücləndirilmiş elektron imzası ilə təsdiq edilir. Nizamnaməyə dəyişiklik və qərar avtomatik generasiya olunur, yeni nizamnamə, reyestrdən çıxarış və şəhadətnamə hüquqi şəxsin elektron kabinetinə göndərilir. Bu yenilik ölkədə biznesin təsis edilməsi praktikasının qabaqcıl beynəlxalq təcrübə nəzərə alınmaqla təkmilləşdirilməsi prosesi çərçivəsində həyata keçirilib. Biznesin qeydiyyatı prosesi üzrə Azərbaycan dünyada olan ən yaxşı təcrübələrdən birinə malikdir".` // İçeriği kısaltmak için
        },
        {
            img: img2,
            title: 'Bir sıra mikro sahibkarların gəlirlərinin 75%-i 3 işçi tələbi olmadan vergidən azad edilir',
            content: `Növbəti ildən illik dövriyyəsinin həcmi 45 min manatadək olan bir sıra xidmət sahələri üzrə fəaliyyət göstərən mikro sahibkar olan fiziki şəxslər əldə etdikləri gəlirlərinin 75 faizi hər hansı şərt tətbiq edilmədən (3 işçi və məcburi dövlət sosial sığorta haqqı üzrə borcun olmaması tələbi) vergidən azad edilir.

“APA-Economics” xəbər verir ki, bu Vergi Məcəlləsinə təklif edilən dəyişikliklərdə öz əksini tapıb.

Qeyd edilən xidmət sahələri aşağıdakılardır:

Proqram təminatının işlənməsi;
layihə-dizayn və dekorasiya sahəsində xidmətlər;
tərcümə xidmətləri;
reklam xidmətləri;
araşdırma və tədqiqat sahəsində fəaliyyət;
elm, təhsil, mədəniyyət və idman sahəsində göstərilən xidmətlər;
Hüquq, sərbəst auditor, mühasibat və maliyyə sahəsi üzrə məsləhət xidmətləri;
Jurnalistlərin fəaliyyəti;
Bazar konyukturunun öyrənilməsi;
Qiymətləndirmə fəaliyyəti;
Avtonəqliyyat vasitələri ilə yükdaşımaları istisna olmaqla sifarişlərin çatdırılması və kuryer xidməti;
Turizm bələdçiliyi;
İxrac xidməti.
Xatırladaq ki, bu ilin yanvarın 1-dən Vergi Məcəlləsinin 102.1.30-cu maddəsinə əsasən müvafiq il üzrə orta aylıq muzdlu işçi sayı 3 nəfərdən az olmayan və məcburi dövlət sosial sığorta haqları üzrə borcu olmayan mikro sahibkarlıq subyekti olan fərdi sahibkarların sahibkarlıq fəaliyyətindən əldə etdikləri gəlirinin 75 faizi gəlir vergisindən azad ediliib.

Əlavə edək ki, təklif edilən güzəştlər yalnız fiziki şəxslərə aiddir, hüququ şəxslər isə əvvəlki qaydada (yəni il üzrə orta aylıq muzdlu işçi sayı 3 nəfərdən az olmayan və məcburi dövlət sosial sığorta haqları üzrə borcu olmamaq) şərtləri yerinə yetirdikdən sonra güzəştlərdən istifadə edə biləcəklər.

Bu Qanun qəbul ediləcəyi halda 2025-ci il yanvarın 1-dən qüvvəyə minəcək.`
        },
        {
            img: img3,
            title: 'İşsiz statusunun verilməsi və sığorta ödənişinin ödənilməsi qaydası',
            content: `İşsizlikdən sığorta ödənişinin edilməsi üçün işsiz şəxs öncə “Məşğulluq haqqında” qanunun tələblərinə uyğun olaraq işsiz kimi qeydiyyata alınmalıdır. Qeydiyyatın qaydaları, işsizlik statusunun alınması, ödənişlərin hesablanması ilə bağlı məqamlara əmək qanunvericiliyi üzrə ekspert Nüsrət Xəlilov aydınlıq gətirir.

“Məşğulluq haqqında” Qanunun 5-ci maddəsinə əsasən, işsiz statusunun verilməsi qaydalarına nəzər salaq:

İşsiz şəxslərin qeydiyyatı yalnız elektron qaydada aparılır. Belə ki, işsiz şəxs qeydiyyata alınması üçün www.e-sosial.az portalına daxil olaraq "e-xidmətlər" bölməsindən "Vətəndaşların işaxtaran və işsiz kimi qeydiyyata alınması, qeydiyyatdan müvəqqəti çıxarılması və qeydiyyatın ləğv edilməsi" xidmətini seçməlidir. Şəxslər elektron informasiya sistemində elektron ərizəni doldurduqdan sonra işaxtaran kimi qeydiyyata alınırlar.

Şəxs işaxtaran kimi qeydiyyata alındığı gündən 5 (beş) iş günü ərzində ona münasib iş təklif olunmadığı və ya işəgötürən (işəgötürənlər) tərəfindən vakansiya qəbulundan imtina edildiyi halda, müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) həmin şəxsin işsiz kimi qeydiyyata alınması haqqında qərar qəbul edir və bu barədə şəxsin fərdi məşğulluq vərəqində müvafiq qeyd aparır. İşaxtaran və işsiz şəxslər fərdi məşğulluq vərəqindən çıxarışı elektron informasiya sistemindən real vaxt rejimində əldə etmək hüququna malikdirlər.

Aşağıdakı hallarda şəxs işsiz kimi qeydiyyatdan müvəqqəti çıxarılır:

hərbi və ya alternativ xidmətə, hərbi toplanışlara çağırıldıqda, həmin müddətdə;
barəsində azadlıqdan məhrumetmə və ya tibbi xarakterli məcburi tǝdbirlərin tətbiqinə dair məhkəmənin qanuni qüvvəyə minmiş qərarı olduqda, həmin müddətdə;
ona təklif olunan münasib işlərdən imtina etdikdə, 1 (bir) il müddətində;
fərdi maşğulluq proqramının tərtib olunmasından və (və ya) icrasından imtina etdikdə və yaxud fərdi məşğulluq proqramının icrasına dair hesabat "İşsizlikdan sığorta haqqında" Azərbaycan Respublikası Qanununun 17.7-i maddəsi ilə müəyyən edilmiş müddətdə təqdim etmədikdə.
Aşağıdakı hallarda şəxsin işsiz kimi qeydiyyatı ləğv edilir:

Qanuna əsasən məşğul şəxs hesab edildikdə;
"Əmək pensiyaları haqqında" və ya "Sosial müavinətlər haqqında" Azərbaycan Respublikasının qanunlarına müvafiq olaraq yaşa görə əmək pensiyası və ya yaşa görə müavinət təyin edilməsi üçün əsaslar yarandıqda;
Vəfat etdikdə və ya məhkəmənin qanuni qüvvəyə minmiş qərarı əsasında xəbərsiz itkin düşmüş və ya ölmüş elan edildikdə;
Təqdim olunmuş sənədlərdə və məlumatlarda təhrif olunmuş və ya düzgün olmayan məlumatlar aşkar olunduqda; (təkrar 1 (bir) aydan sonra müraciət etmək hüququna malikdir);
İşsiz kimi qeydiyyatdan çıxarılma barədə elektron ərizə təqdim edildikdə;
Təhsil müəssisəsinə əyani qəbul olunduqda.
Aşağıdakı şəxslərin işsiz kimi qeydiyyata alınmasına yol verilmir:
Qanuna əsasən məşğul şəxslərə aid edilənlər;
15 yaşına çatmayanlar;
Təhsil müəssisəsində əyani təhsil alanlar;
"Əmək pensiyaları haqqında" və ya "Sosial müavinətlər haqqında" Azərbaycan Respublikasının qanunları ilə müvafiq olaraq yaşa görə əmək pensiyası və ya yaşa görə müavinət təyin edilmiş şəxslər;
Azərbaycan Respublikasının Əmək Məcəlləsinin 74-cü maddəsinin 1-ci hissəsində və 75-ci maddəsinin 2-ci hissəsinin "b" və "c" bəndlərində göstərilən, habelə işsiz və işaxtaran şəxslərin haqqı ödənilən ictimai işlər ilə bağlı əmək münasibətlərinə xitam verildiyi hallar istisna olmaqla, göndəriş əsasında bağlanılmış əmək müqaviləsinə bu müqavilə ilə müəyyən edilmiş müddətdən əvvəl öz təşəbbüsü ilə xitam verən şəxslər, 6 ay müddətində;
Məşğul şəxslər dedikdə “Məşğulluq haqqında” Qanunun 4-cü maddəsinə əsasən, aşağıdakılar nəzərdə tutulur:
Muzdla işləyənlər - Əmək Məcəlləsinə uyğun olaraq işəgötürənlə əmək müqaviləsi bağlayaraq, müvafiq iş yerlərində əmək fəaliyyətini əməkhaqqı müqabilində yerinə yetirən şəxslər;
Mülki-hüquqi xarakterli müqavilələrlə işləyənlər - Azərbaycan Respublikasının Mülki Məcəlləsinə uyğun olaraq qarşı tərəflə müqavilə bağlayıb əmək münasibətləri yaratmadan müəyyən haqq müqabilində işləri (xidmətləri) yerinə yetirən şəxslər;
Sahibkarlar, mülkiyyətində kənd təsərrüfatına yararlı torpaq payı olanlar, ailə kəndli təsərrüfatının üzvləri;
Haqqı ödənilən vəzifəyə seçilənlər, təyin və ya təsdiq edilənlər;
Azərbaycan Respublikasının Silahlı Qüvvələrində xidmət edənlər;
Ödənişli fəaliyyətlə məşğul olan ali və orta ixtisas təhsili müəssisələrində əyani tahsil alanlar;
Azərbaycan Respublikasının ərazisində qanuni əsaslarla haqqı ödənilən əmək fəaliyyəti ilə məşğul olan əcnəbilər və vətəndaşlığı olmayan şəxslər;
Azərbaycan Respublikasının hüdudlarından kənarda qanuni əsaslarla əmək faaliyyəti ilə məşğul olan Azərbaycan Respublikasının vətəndaşları.
İşsizliyə görə aylıq sığorta ödənişinin hesablanması qaydası

Sığorta ödənişinin hesablanması üçün sığortaolunanın itirilmiş orta aylıq əməkhaqqı onun sığorta hadisəsinin baş verdiyi tarixdən əvvəlki 12 tǝqvim ayının əməkhaqqının cəmlənmiş məbləğini 12-yə bölməklə tapılır. Sığortaolunan əvvəlki 12 təqvim ayının bütün aylarını tam işləmədikdə (lakin sığorta hadisəsinin baş verdiyi tarixdən əvvəlki 24 təqvim ayı ərzində 12 təqvim ayından az olmayan müddətə sığorta stajına malikdirsə), sığortaolunanın itirilmiş orta aylıq əməkhaqqı məbləği onun əvvəlki 24 təqvim ayı ərzində faktiki tam işlədiyi aylarda hesablanmış əməkhaqqının cəmlənmiş məbləğinin faktiki tam işlədiyi ayların sayına bölünməsi yolu ilə hesablanır.`
        },
        {
            img: img4,
            title: 'Şirkətlərdə reformların keçirilməsində 5 əsas səhv',
            content: `Hər bir şirkətin həyatında elə bir an gəlir ki, şirkət rəhbərliyi artıq yeniliklərin icra edilməsi və reformların həyata keçirdilməsi zəruriliyini anlayır. Reformlar üçün səbəblər müxtəlif ola bilər : dünyada baş verən böhranlar, bazar vəziyyətinin və makro iqtisadi dəyişməsi, rəqabətin güclənməsi, müasir texnikaların inkişafı, şirkətin rəqabəy gücünün artırılmasl məqsədi ilə uzun müddətli perspektivdə xəclərin azaldılması və bir çox digər səbəblər. Bazarda rəqabət faktorunun olması və cənab müştəri uğrunda mübarizə aparmaq zərurəti şirkətlərin daim "formda" olmasını tələb edir.

Reformların icra edilməsi və bunların uzun müddətli müvəffəqiyyəti üçün bir neçə sadə qayda var : rəhbərliyin dəstəyi və birbaşa iştirak etməsi, reformların məqsədləri və mahiyyəti haqqında məlumatların əməkdaşlara çatdırılması, bu dəyişiklikləri həyata keçirəcək reformatorlar komandasının qurulması. Bu qaydaların tam və dolğun şəkildə icra edilməməsi reformların ancaq bir hissəsinin uğurlu olması ilə nəticələnir. Planların müsbət nəticələnməməsində uğursuzluqların müxtəlif, ancaq bir biri ilə əlaqəli olan səbəbləri var.

Səhv N1. Rəhbərliyin şəxsi nümunəsinin olmaması

Mahiyyət : Rəhbərlik reform proseslərində iştirak etmir və ya qeyri aktiv və ancaq sözlərlə və şifahi şəkildə iştirak edir.

Reformların təşəbbüsü hər zaman üst təbəqədən gəlir və oradan başlayırlar. Şirkətlərin üst idarəçiləri dəyişikliklərin nəinki başında olmalıdırlar – onlar bu dəyişikliklərin önündə gemdəlidirlər. İlk qısa müddətli müsbət nəticələrdən sonra rəhbərlik diqqətini və enerjisini digər layihələrə ayırırsa, personalın reformlara qarşı olan diqqətinin tədricən azalma ehtimalı yüksəkdir.

Səhv N2. Sıravi əməkdaşlar və orta təbəqə idarəçilərin diqqətə alınmaması.

Mahiyyət : Orta təbəqə idarəçilərə və sıravi əməkdaşlara reformlar haqqında məlumatlar tam çatdırılmır.

Şirkətlərin üst idarəçiləri öz kabinetlərində çox keyifyyətli və gözəl standartlar və təlimatlar hazırlaya bilərlər, ancaq bunların anlaşılır şəkildə əməkdaşlara çatdırılmaması bu addımların uğursuzluğu ilə sonlanacaq. Rəhbərliyin otaqlarında nəzəri və iqtisadi baxış açısından nə qədər doğru və effektiv qərarların qəbul edilməsindən asılı olmadan unutmamaq lazımdır ki, bütün bunların icra edilməsi işçilər tərəfindən olacaq. Peşəkar şəkildə yazılan müştəriyə qayğı standartları personal tərəfindən həzm edilmədiyi və qəbul edilmədiyi müddət ərzində təsirli olmayacaqlar. Kağız üzərində böyük və müsbət nəticələr verəcəyi görünən qeyri adi reformlar, onları icra edəcək insanların qəlblərinə və ruhlarına həkk edilməsələr, sonunda kağız üzərində də qalacaqlar. Təşkilat daxili danışıqlar haqqında Harvard Biznes Məktəbi professoru Boris Groysberq öz araşdırmalarında Hindustan Petroleum Corporation-u missal çəkərək belə yazır : "şirkətin vizoynunun dəyişdirilməsi haqqında məlumatlar 11.000 əməkdaş arasında 20 nəfərlik qruplar üçün keçirilrdi və bu proses bir neçə il zaman aldı".

Səhv N3. Reformatorlar komandasının olmaması

Mahiyyət : Reformlar prosesinin başında duracaq və rəhbərlik edəcək təsirli insanlar qrupu yaradılmır.

Rəhbərin şəxsi nümunəsi və təşəbbüsü ilə bərabər həmdə yeni ideyalara bağlı olan insanlar komandası qurulmalıdır. Şirkətdə reformların keçirilməsi zamanı unutmamaq lazımdır ki, mövzu insanların vərdişlərində, iş və çalışma stillərində və gündəlik rutin fəaliyətlərində dəyişikliklərin edilməsidir və məhs bu sahədə də aktiv müqavimət gözlənilir, çünki hər bir fərqlilik insanların öyrəşdiyi komfort zonasının xaricinə çıxması deməkdir.

Müxtəlif şöbə və departamentlərdən toplanmış reformatorlar komanda daxildə olan açıq və gizli müqaviməti daha da rahat aradan qaldıra bilər.

Səhv N4. Komandada "konservatorların" olması

Mahiyyət : Reformlara açıq olmayan insanlar və "klassik" idarə etmə sisteminə bağlı olanlar yenilikləri zəyiflədəcəklər.

"Konservatorların" yeniliklərə qarşı çıxması və müqavimət göstərməsi ilə birlikdə bunlar aparılan işlərə qarşı həm də ümumi olaraq mənfi təsir göstərirlər və əməkdaşların dəyişikliklərə qarşı motivasiya və yanaşmalarını zəyiflədirlər. Qapalı bir dairə alınır : komandanın bir hissəsi "konservatorların" təsiri altında olur, şirkət rəbbəri isə öz növbəsində təcrübəli vəqiymətli mütəxəssis olan "konsertatoru" itirmək istəmir. Belə bir vəziyyətin nəticəsində orta idarəçilər və əməkdaşlar belə qərara gəlirlər ki, rəhbərlik reformlara o qədər də hazır deyil.

Səhv N5. Nəticələrin bərkidilməsi sisteminin olmaması

Mahiyyət : Əldə edilən nailiyyətlər korporativ mədəniyyətdə möhkəmləndirilmir və dəqiq yerləşdirilmir.

Qısa müddətli nəticələr hər zaman qalibiyyət olaraq təqdim və qəbul edilir. Qısa müddətli və uzun müddətli müsbət nəticələr arasında fərq, müharibə ilə döyüş arasındakı fərq qədər böyükdür. Döyüşdə qalib gəlib müharibəni uduzmaq mümkündür.

Əldə edilən dəyişikliklərin şirkətin bütün səviyyələrində norma və vərdiş halına gəlmiş davranış stili olmasına qədər dəyişikliklərin kök salması və uzun müddətli müvəffəqiyyətdən danışmaq olmaz.

Insanlar öz təbiətlərinə görə vərdişlərinə bağlı olurlar və onları komfort bölgələri xaricinə çıxaran bütün dəyişikliklərə təbii müqavimət göstərirlər. Bəzən elə hallar olur ki, reformların başlamasından bir müddət sonra insanlar yeni standartlara görə hərəkət edirlər, ancaq yeni əməkdaşlıq və fəaliyyət tərzi bərkidilmədiyinə görə öncəki iş stillərinə geri dönürlər.

Nəticə

Bütün bu səhvlərin nəticəsində reformlar şirkətdə sona qədər çatdırılmır, və bütün plan və tədbirlər konkret, dəqiq fəaliyyətdən daha çox ümumi aktivlilyə bənzəyirlər. Savadlı rəhbərin işi isə digər insanların səhvlərini nəzərə almaqdır ki, bu səhvləri gələcəkdə özü də etməsin.`
        }
    ];

    const toggleCard = (index) => {
        setActiveCardIndex(activeCardIndex === index ? null : index);
    };

    const closeInfoBox = () => {
        setActiveCardIndex(null);
    };

    return (
        <div className="info-grid">
            {infoList.map((item, index) => (
                <div
                    key={index}
                    className="info-card"
                    onClick={() => toggleCard(index)}
                >
                    <img src={item.img} alt={item.title} className="info-card-img" />
                    <h3 className="info-card-title">{item.title}</h3>
                </div>
            ))}
            {activeCardIndex !== null && (
                <div className="info-detail-box">
                    <div className="info-close-icon" onClick={closeInfoBox}>
                        ✖
                    </div>
                    <h3 className="info-detail-title">{infoList[activeCardIndex].title}</h3>
                    <p className="info-detail-content">{infoList[activeCardIndex].content}</p>
                </div>
            )}
        </div>
    );
}

export default InfoPages;