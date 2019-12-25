import Vue from 'vue'
import { Button, DatePicker, Row, Alert, Form, FormItem, Input, Message } from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.component('Button', Button)
Vue.component('DatePicker', DatePicker)
Vue.component('Row', Row)
Vue.component('Alert', Alert)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Input', Input)
Vue.component('Message', Message)

Vue.prototype.$Message = Message
