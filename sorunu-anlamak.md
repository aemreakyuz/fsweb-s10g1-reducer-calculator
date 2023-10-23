# Sorunu Anlamak:

1. 1 butonuna basılmasından, güncellenen değerimizin render edilmesine kadar olan uygulama adımları nelerdir?
   Her adım için kodun hangi bölümünün geçerli olduğunu listeleyin.

- Kullanıcı 1 butonuna tıkadı.
- buttondaki onClick eventi çalıştı(incHandler)
- incHandler type'ı ADD_ONE olan reducer fonksiyonunu dispatch etti.
- ADD_ONE aksiyonu state.total'i 1 arttırarak güncelledi
  ...

- TotalDisplay total artı 1'i gösterdi.
