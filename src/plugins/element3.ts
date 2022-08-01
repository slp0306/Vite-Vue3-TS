import { ElButton, ElInput } from 'element3';

import 'element3/lib/theme-chalk/button.css';
import 'element3/lib/theme-chalk/input.css';

export default function (app: any) {
  app.use(ElButton);
  app.use(ElInput);
}
