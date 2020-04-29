import Vue from "vue";
import Button from "../components/Element/Button/index.vue";
import Form from "../components/Element/Form/index.vue";
import Input from "../components/Element/Input/index.vue";
import Textarea from "../components/Element/Textarea/index.vue";

const components = [Button, Form, Input, Textarea];

components.forEach(component => {
  Vue.component(component.name, component);
});
