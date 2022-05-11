// function yillar()
// {
//     var tarih=new Date();
//     var yil=tarih.getFullYear();

//     for(var i=2020;i<=2022;i++)
//     {
//         var secenek=document.createElement("option");
//         document.getElementById("ciroYili").options.add(secenek);
//         secenek.text=i;
//         secenek.value=i;
//     }
// }



function eFaturaZorunluluguSorgula(){

      //Gerekli değişkenler tanımlanır.
      var sektorSecimi,ciroSecimi,yilSecimi;
      let faturaSonucu;
      var i;

      //1.döngü bloğu-Şirket tipi listesini gezerek seçili olan value değerini alır.

      for(i=0; i<document.getElementById("sirketTipi").length; i++){

        if(document.getElementById("sirketTipi").options[i].selected)
        {
            sektorSecimi=document.getElementById("sirketTipi").options[i].value;
        }

      }

      //2.döngü bloğu- yıllık ciro listesini gezerek seçili olan value değerini alır.
    for(i=0;i<document.getElementsByName("ciro").length;i++)
    {
        if(document.getElementsByName("ciro")[i].checked)
        {
            ciroSecimi=document.getElementsByName("ciro")[i].value;
        }
    }

//  //3.döngü bloğu-ciro yılı listesini gezerek seçili olan value değerini alır.

//   for(i=0;i<document.getElementById("ciroYili").length;i++)
//   {
//       if(document.getElementById("ciroYili").options[i].selected)
//       {
//               modelSecimi=document.getElementById("ciroYili").options[i].value;
//       }
//   }


    
    //1.şart kontrolü-Şirket sektörünün ve ciro seçimine göre e-fatura zorunluluğu belirlenir.
    if(sektorSecimi=="gayrimenkul" && ciroSecimi=="1milyon"){

        faturaSonucu = "01/07/2022 tarihinden itibaren E-Fatura ve E-Arşiv Fatura ve 01/07/2023 tarihinden itibaren E-Defter belge zorunluluğunuz vardır. ";
    }
    else if(sektorSecimi=="eTicaret" && ciroSecimi=="1milyon"){

        faturaSonucu = "01/07/2022 tarihinden itibaren E-Fatura ve E-Arşiv Fatura ve 01/07/2023 tarihinden itibaren E-Defter belge zorunluluğunuz vardır. ";
    }
    
    // otel ve doviz sektörleri için ciro şartı olmaksızın
    
    if(sektorSecimi=="otel"){
        faturaSonucu = "01/07/2022 tarihinden itibaren E-Fatura ve E-Arşiv Fatura ve 01/01/2023 tarihinden itibaren E-Defter belge zorunluluğunuz vardır. ";
    }
    else if(sektorSecimi=="doviz"){
        faturaSonucu = "01/01/2022 tarihinden itibaren E-Fatura ve E-Arşiv Fatura ve 01/01/2023 tarihinden itibaren E-Defter belge zorunluluğunuz vardır. ";
    }



    // sektör şartı olmaksızın ciro seçimine göre e-fatura zorunluluğu belirlenir.
    else if(ciroSecimi=="10milyon"){
        faturaSonucu="2021 Dönemi 10 Milyon TL CİRO ve Üzerine Sahipseniz, E-Fatura, E-Arşiv Fatura, E-Müstahil ve E-Defter zounluluğunuz Önceki Dönemlerdeki gibidir. 01/07/2022 tarihinden itibaren E-İrsaliye belge zorunluğunuz vardır"
    }
    else if(ciroSecimi=="4milyon"){
        faturaSonucu="01/07/2022 tarihinden itibaren E-Fatura, E-Müstahsil, E-Arşiv Fatura ve 01/01/2023 tarihinden itibaren E-Defter belge zorunluluğunuz vardır. "
    }
    else if(ciroSecimi=="3milyon"){
        faturaSonucu="01/07/2022 tarihinden itibaren E-Fatura, E-Arşiv Fatura zorunluluğunuz, 01/07/2021 tarihinden itibaren E-Müstahsil ve 01/01/2023 tarihinden itibaren E-Defter belge zorunluluğunuz vardır. "
    }



    //dağıtıcı, hal, tarım... vb. sektör kısmı için 
    if(sektorSecimi=="dhts"){

        faturaSonucu="Ticari Faaliyete Başladıktan İtibaren 4. Ayın İlk Gününe denk gelen tarihte E-Fatura, E-Arşiv Fatura, E-İrsaliye ve E-Müstahsil belge zorunluluğu vardır. Aynı zamanda da Ticari Faaliyet Başlangıcını Takip Eden 1 Ocak tarihli E-Defter belge zorunluluğunuz vardır. "
    }
    else if(sektorSecimi=="enerjiMaden"){

        faturaSonucu="Ticari Faaliyete Başladıktan İtibaren 4. Ayın İlk Gününe denk gelen tarihte E-Fatura, E-Arşiv Fatura, E-İrsaliye Belge zorunluluğunuz vardır. Aynı zamanda da Ticari Faaliyet Başlangıcını Takip Eden 1 Ocak tarihli E-Defter belge zorunluluğunuz vardır."
    }

    else if(sektorSecimi=="bavul"){

        faturaSonucu="Ticari Faaliyete Başladıktan İtibaren 4. Ayın İlk Gününe denk gelen tarihte E-Fatura, E-Arşiv Fatura Belge zorunluluğunuz vardır. Aynı zamanda da Ticari Faaliyet Başlangıcını Takip Eden 1 Ocak tarihli E-Defter belge zorunluluğunuz vardır."
    }


    //gösteri, yolcu taşıma firmaları için

    if(sektorSecimi=="gosteriTasima"){

        faturaSonucu="Ticari Faaliyete Başladıktan İtibaren 4. Ayın İlk Gününe denk gelen tarihte E-Fatura, E-Arşiv Fatura ve E-Bilet Belge zorunluluğunuz vardır. Ayrıca Ticari Faaliyet Başlangıcını Takip Eden 1 Ocak tarihli E-Defter belge zorunluluğunuz vardır. "
    }

    //serbest meslek mensupları için

    if(sektorSecimi=="serbest"){

        faturaSonucu="Ticari Faaliyete Başladıktan İtibaren 4. Ayın İlk Gününe denk gelen tarihte E-SMM belge zorunluluğunuz bulunmaktadır."
    }

  

    document.getElementById("sonuc").innerHTML= "E-Belge Zorunluluğu: "+ faturaSonucu;
}

