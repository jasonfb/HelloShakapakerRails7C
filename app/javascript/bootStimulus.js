import { Application } from '@hotwired/stimulus';
import { definitionsFromContext } from '@hotwired/stimulus-webpack-helpers';

const application = Application.start();
const context = require.context('./controllers', true, /\.[jt]s$/);
application.load(definitionsFromContext(context));
application.debug = process.env.NODE_ENV === 'development';
