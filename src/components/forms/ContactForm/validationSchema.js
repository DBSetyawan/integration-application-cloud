import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Terlalu pendek!')
    .max(50, 'Terlalu Panjang!')
    .required('Nama tidak boleh kosong!'),
  email: Yup.string()
    .email('Ketik email dengan benar!')
    .required('Email tidak boleh kosong!'),
  message: Yup.string()
    .required('Ulasan anda sangat dibutuhkan..'),
})

export default validationSchema
