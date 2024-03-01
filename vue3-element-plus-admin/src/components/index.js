import WangEditor from './WangEditor';
import BasicCascader from './cascader';
import BasicForm from './form/';
import SvgIcon from './svgIcon';
import BasicUpload from './upload';
export default {
    install(app) {
        app.component('basic-form', BasicForm);
        app.component('wang-editor', WangEditor);
        app.component('svg-icon', SvgIcon);
        app.component('basic-cascader', BasicCascader);
        app.component('basic-upload', BasicUpload);
    },
};
