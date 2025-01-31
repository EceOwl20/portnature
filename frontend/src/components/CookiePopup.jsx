import React, { useState } from "react";

const CookiePopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const [selectedContent, setSelectedContent] = useState(0);

  const contents = [
    <div className="flex flex-col h-full max-h-[444px] w-full text-start items-start justify-between text-[#233038] font-montserrat overflow-y-auto overflow-x-hidden">
      <h3 className="text-[25px] leading-normal font-bold">Cookie Clarification Text</h3>
      <p className="text-[12px] font-medium leading-[150%] pb-6">6698 sayılı Kişisel Verilerin Korunması Kanunu'na (“Kanun”) göre ARAS İNŞAAT TİCARET TURİZM ANONİM ŞİRKETİ (“Bundan sonra ‘PORT NATURE’ olarak anılacaktır.”) sizinle ilgili kişisel verileri işlemesi sebebiyle veri sorumlusu olarak tanımlanmaktadır. Kanunun "Aydınlatma Yükümlülüğü" başlıklı 10'ncu maddesine göre veri sorumluları, kişisel verilerini işledikleri gerçek kişileri bazı konularda bilgilendirmekle yükümlüdür. İlgili Kişi: [https://portnature.com.tr/] alan adlı web sitemizi ziyaret ettiğiniz için çerezler ve farklı tanımlayıcılarla bazı kişisel verilerini işlediğimiz siz, Kanun tarafından ilgili kişi olarak tanımlanmaktasınız. Veri Sorumlusu: Sizinle ilgili kişisel veriler konusunda kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan [PORT NATURE] veri sorumlusudur. ÇEREZLER HAKKINDA BİLGİLENDİRME; Bununla birlikte sitemizde çerezler vasıtasıyla birtakım kişisel verilerinizi işliyoruz. Çerezler (cookies), reklam kimlikleri ve web tanımlayıcıları gibi teknolojileri (bu teknolojilerin tamamı “Çerez” olarak ifade edilecektir) ifade etmektedir. Çerez (Cookie) Nedir? Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcılar aracılığıyla bilgisayarınıza (ya da akıllı telefon veya tablet gibi diğer cihazlarınıza) kaydedilen ve genelde harf ve rakamlardan oluşan çok küçük metin dosyalarıdır. Çerezler kullanıcının ve cihazının tanınmasına, kullanıcının tercihleri ve geçmiş işlemleriyle ilgili bazı bilgilerin depolanmasını sağlar. Çerezler, ziyaret ettiğiniz web sitesini yöneten sunucular tarafından oluşturulurlar. Böylelikle ziyaretçi aynı siteyi ziyaret ettiğinde sunucu bunu anlayabilir. Çerezler, web sitesi sahiplerine aynı ziyaretçinin siteyi yeniden ziyaret ettiğini gösteren kimlik kartlarına benzetilebilir. Çerezler konusunda daha detaylı bilgi için https://www.aboutcookies.org/ ve https://www.allaboutcookies.org/ adreslerini ziyaret edebilirisiniz. Çerezler Vasıtasıyla Kişisel Verilerin Elde Edilmesi Web sitemizi ilk ziyaret edişinizde size çerez tercihlerinize ilişkin bir ekran sunulur. Bu ekranda kullanımına izin verdiğiniz çerezler uyarınca ilgili çerezler tarayıcınıza/cihazınıza depolanır. Çerezlerin her biri genellikle aşağıdaki unsurları içerir: • Çerezin gönderildiği sunucu, • Çerezin önceden belirlenmiş olan kullanım ömrü, • Genellikle rastgele oluşturulmuş benzersiz bir tanımlayıcı değer/numara (çerezi gönderen web sitesi sunucusu, sayfalar arasında gezindiğinizde sizi tanımak için bu değeri kullanır). Çerezler vasıtasıyla veriler tamamen otomatik yöntemlerle toplanmaktadır. Çerezler, sahipleri, kullanım ömürleri ve kullanım amaçları bakımından sınıflandırılabilir: • Sahibine göre çerezler, ziyaret ettiğiniz web sitesi tarafından cihazınıza yerleştirilen birinci taraf çerezleri ve üçüncü taraflarca sunulan üçüncü taraf çerezleri kullanılmaktadır. Birinci çerezleri, PORT NATURE tarafından sunulurken, üçüncü taraf çerezleri hizmet alınan veya iş ortağı olan farklı firmalarca sunulmaktadır. • Kullanım ömrüne göre, oturum çerezleri ve kalıcı çerezler kullanılmaktadır. Oturum çerezleri ziyaretçinin web sitesini terk etmesiyle birlikte silinirken, kalıcı çerezler önceden belirlenen kullanım ömürleri boyunca ziyaretçilerin cihazlarında saklanmakta ve bir sonraki ziyaretinde ziyaretçiyi ve ziyaretçinin tercihlerini hatırlamak amacıyla kullanılır. • Kullanım amaçlarına göre, sitede kesinlikle gerekli olan çerezler, analitik çerezler ve hedefleme/reklam çerezleri kullanılmaktadır. Çerezler Vasıtasıyla Toplanan Veriler, Kullanım Amaçları Ve Hukuki Sebepleri Çerezler aracılığıyla, kullandığınız tarayıcı ve işletim sistemi, IP adresi, kullanıcı ID, ziyaretinizin tarihi ve saati, erişim durumu, web sitesindeki özelliklerin kullanımı, girdiğiniz arama ifadeleri, web sitemizi ne sıklıkta ziyaret ettiğiniz, dil tercihleriniz, sayfalarda gerçekleştirdiğiniz işlemler dahil kullanıcı işlem kayıtlarına ilişkin veriler toplanmakta ve işlenmektedir. Çerezler, web sitemizi ziyaretinizin ve buradaki deneyiminizin stabil bir şekilde gerçekleştirilmesinin ve bir sonraki kullanımınızda bilgilerinizin hatırlanmasının sağlanması, sitenin işleyişinin ve içeriğinin geliştirilmesi, site kullanımlarının istatistiksel olarak değerlendirilmesi, sitede yer alan içeriğin sizin ve cihazınız için en etkili şekilde sunulması ile kullanıcılara tercih ve kullanım alışkanlıkları doğrultusunda özelleştirilmiş hizmetler ve reklamlar sunulması amaçlarıyla kullanılmaktadır. Çerezler kullanım amaçları ve fonksiyonlarına göre çeşitli kategorilere ayrılmaktadır. Aşağıda kategorilerine göre web sitemizde kullanılan çerezler ile ilgili çerezleri sağlayanlar, çerezler ile kişisel veri aktarılabilecek yabancı ülkeler ve her bir çerez özelinde kullanım amaçlarına ve hukuki sebeplerine yer verilmiştir: 1. Zorunlu Çerezler Web sitesinin kullanımı ve işlerliği için gerekli olan çerezlerdir. Zorunlu çerezler devre dışı bırakıldığı takdirde sitenin bir kısmına veya tümüne erişim mümkün olmayabilir. Zorunlu çerezler vasıtasıyla işlenen kişisel veriler, ürün ve hizmetlerin sunulabilmesi ve faaliyetlerin mevzuata uygun yürütülmesi amaçlarıyla, KVKK Md.5/2e’de öngörülen bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması sebebiyle işlenmektedir.</p>
  </div>,

    // second text
    <div className="flex flex-col h-full w-full text-start items-start justify-between text-[#233038] font-montserrat">
      <h3 className="text-[25px] leading-normal font-bold ">What are cookies?</h3>
      <p className="text-[12px] font-medium leading-[150%]">Cookies are small text files placed on your device by websites you visit. They are used to remember your preferences, such as login information, and to track website performance. This ensures a more personalized and efficient online experience.</p>
      <p className="text-[#233038] text-[12px] leading-normal font-medium">To learn more about cookies  <span className="text-blue-400 cursor-pointer">click here</span></p>
      <div className="flex items-center justify-around w-full">
        <button className="bg-[#233038] text-white p-[15px] w-full rounded-lg">Save Settings</button>
      </div>
    </div>,

    // third button
    <div className="flex flex-col h-full w-full text-start items-start justify-between text-[#233038] font-montserrat">
       <h3 className="text-[25px] leading-normal font-bold ">Strictly Necessary</h3>
       <p className="text-[12px] font-medium leading-[150%]">Mandatory cookies are essential for the website to function properly. Without these cookies, the website cannot operate effectively. These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. These cookies do not store any personally identifiable information.</p>
       <div className="flex w-full justify-end items-center">
        <span className="text-[#198C68] text-[24px]">Active</span>
       </div>
       <div className="flex items-center justify-around w-full">
       <button className="bg-[#233038] text-white p-[15px] w-full rounded-lg">Save Settings</button>
      </div>
    </div>,

  // 4th button
  <div className="flex flex-col h-full w-full text-start items-start justify-between text-[#233038] font-montserrat">
  <h3 className="text-[25px] leading-normal font-bold ">Performance Cookies</h3>
  <p className="text-[12px] font-medium leading-[150%]">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site, which helps us optimize your experience. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not be able to use your data in this way.</p>
  <div className="flex w-full justify-end items-center">
   <span className="text-[#198C68] text-[24px]">Disable</span>
  </div>
  <div className="flex items-center justify-around w-full">
  <button className="bg-[#233038] text-white p-[15px] w-full rounded-lg">Save Settings</button>
 </div>
</div>,


// 5th button
<div className="flex flex-col h-full w-full text-start items-start justify-between text-[#233038] font-montserrat">
<h3 className="text-[25px] leading-normal font-bold ">Functional Cookies</h3>
<p className="text-[12px] font-medium leading-[150%]">These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.</p>
<div className="flex w-full justify-end items-center">
 <span className="text-[#198C68] text-[24px]">Disable</span>
</div>
<div className="flex items-center justify-around w-full">
<button className="bg-[#233038] text-white p-[15px] w-full rounded-lg">Save Settings</button>
</div>
</div>,


// 6th button
<div className="flex flex-col h-full w-full text-start items-start justify-between text-[#233038] font-montserrat">
<h3 className="text-[25px] leading-normal font-bold ">Targeting Cookies</h3>
<p className="text-[12px] font-medium leading-[150%]">These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.</p>
<div className="flex w-full justify-end items-center">
 <span className="text-[#198C68] text-[24px]">Disable</span>
</div>
<div className="flex items-center justify-around w-full">
<button className="bg-[#233038] text-white p-[15px] w-full rounded-lg">Save Settings</button>
</div>
</div>,
  ];

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed flex z-[9999] bottom-0 bg-white right-0 left-0 h-[40vh] lg:h-[25vh] w-full items-center justify-center max-w-screen overflow-x-hidden">
        <div className="flex flex-col w-11/12 md:w-5/6 max-w-[1536px] pb-[30px] lg:pt-[20px] gap-2 lg:gap-4 font-montserrat text-center items-center justify-center text-[#233038]">
          <h3 className="text-[15px] lg:text-[20px] font-bold pt-2">We use Cookies</h3>
          <div
            className="flex absolute right-[12px] top-[6px] text-[#233038] text-[18px] lg:text-[22px] cursor-pointer"
            onClick={handleClose}
          >
            X
          </div>
          <p className="text-[12px] lg:text-[17px] font-medium">
          We use cookies for the operation of our website, conducting analytical studies, and personalizing the site according to your preferences. For detailed information about cookies, you can access our Cookie Information Text, which we have prepared, and manage your cookie preferences through the approval tool below. Read more about cookies{" "}
            <span className="text-blue-400 cursor-pointer">daha fazla</span>{" "}
            bilgi edinin
          </p>
          <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:justify-around">
            <button className="text-[12px] lg:text-[16px] font-bold text-center border-black border whitespace-nowrap rounded-lg py-[10px] lg:py-[16px] pl-[20px] pr-[20px] cursor-pointer lg:min-w-[300px] w-full lg:w-1/4 bg-[#efefef]">
            Accept All Cookies
            </button>
            <button
              className="text-[12px] lg:text-[16px] font-bold text-center border-black border whitespace-nowrap rounded-lg py-[10px] lg:py-[16px] pl-[20px] pr-[20px] cursor-pointer lg:min-w-[300px] w-full lg:w-1/4 bg-[#efefef]"
              onClick={handleModalToggle}
            >
              Manage Cookie Preferences
            </button>
            {isModalOpen && (
              <div
                className="flex fixed inset-0 items-center justify-center bg-black bg-opacity-50 z-[9999]"
                onClick={handleModalToggle}
              >
                <div
                  className="flex flex-col w-full lg:w-[798px] h-[566px] bg-white items-center justify-center relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-0 right-4 text-[40px] text-stoneLight"
                    onClick={handleModalToggle}
                  >
                    &times;
                  </button>

                  <div className="flex flex-col gap-5 w-11/12 h-full mt-8 mb-12 items-center justify-center">
                    <h3 className="text-[25px] font-bold leading-normal text-center font-montserrat text-[#212529]">
                    Manage Cookie Preferences
                    </h3>

                    <div className="flex w-full justify-between items-center">
                      <div className="flex flex-col w-2/5 text-[16px] font-bold text-[#233038]">
                        {["Cookie Clarification Text", "Cookies", "Strictly Necessary", "Performance", "Functional", "Targeting"].map(
                          (buttonLabel, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedContent(index)}
                              className={
                                selectedContent === index ? "text-white bg-[#233038] w-[250px] cursor-pointer p-[15px] rounded-lg text-center mt-[10px] mb-[10px] ml-[5px] mr-[5px] border-none whitespace-nowrap" : " bg-white w-[250px] cursor-pointer p-[15px] rounded-lg text-center mt-[10px] mb-[10px] ml-[5px] mr-[5px] border-none"
                              }
                            >
                              {buttonLabel}
                            </button>
                          )
                        )}
                      </div>

                      <div className="flex flex-col w-3/5 h-full">{contents[selectedContent]}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={handleClose}
              className="text-[12px] lg:text-[16px] font-bold text-center border-black border whitespace-nowrap rounded-lg py-[10px] lg:py-[16px] pl-[20px] pr-[20px] cursor-pointer lg:min-w-[300px] w-full col-span-2 lg:w-1/4 bg-[#efefef]"
            >
              Deny All Cookies
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookiePopup;
