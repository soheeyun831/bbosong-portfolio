import Vue from "vue";
import Button from "../components/Element/Button/index.vue";
import Form from "../components/Element/Form/index.vue";
import FormItem from "../components/Element/Form/item.vue";
import Input from "../components/Element/Input/index.vue";
import Textarea from "../components/Element/Textarea/index.vue";

const components = [Button, Form, FormItem, Input, Textarea];

components.forEach(component => {
	Vue.component(component.name, component);
});
