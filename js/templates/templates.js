!function(){var t=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.about=t({compiler:[7,">= 4.0.0"],main:function(){return'<div class="row">\r\n   <div class="col-sm-12">   \r\n      This is about\r\n   </div>\r\n</div>'},useData:!0}),a.admin=t({1:function(t,a,l,n,r){var e,s,o=null!=a?a:t.nullContext||{},i=l.helperMissing,d="function",c=t.escapeExpression;return"            <tr>\r\n               <td class='index-column'>"+c(typeof(s=null!=(s=l.id||(null!=a?a.id:a))?s:i)==d?s.call(o,{name:"id",hash:{},data:r}):s)+'</td>\r\n               <td><a href="#applications/view/'+c(typeof(s=null!=(s=l.id||(null!=a?a.id:a))?s:i)==d?s.call(o,{name:"id",hash:{},data:r}):s)+'">'+c(typeof(s=null!=(s=l.name||(null!=a?a.name:a))?s:i)==d?s.call(o,{name:"name",hash:{},data:r}):s)+"</a></td>\r\n               <td>"+c(typeof(s=null!=(s=l.cape||(null!=a?a.cape:a))?s:i)==d?s.call(o,{name:"cape",hash:{},data:r}):s)+"</td>\r\n               <td>"+c(typeof(s=null!=(s=l.mask||(null!=a?a.mask:a))?s:i)==d?s.call(o,{name:"mask",hash:{},data:r}):s)+"</td>\r\n               <td>"+c(typeof(s=null!=(s=l.costume||(null!=a?a.costume:a))?s:i)==d?s.call(o,{name:"costume",hash:{},data:r}):s)+"</td>\r\n               <td>"+c(typeof(s=null!=(s=l.superpower||(null!=a?a.superpower:a))?s:i)==d?s.call(o,{name:"superpower",hash:{},data:r}):s)+'</td>\r\n               <td><span class="label label-info">'+c(typeof(s=null!=(s=l.addeddate||(null!=a?a.addeddate:a))?s:i)==d?s.call(o,{name:"addeddate",hash:{},data:r}):s)+"</span></td>\r\n           <td>"+(null!=(e=(l.displayverify||a&&a.displayverify||i).call(o,null!=a?a.verify:a,{name:"displayverify",hash:{},data:r}))?e:"")+'\r\n                <a href="javascript:;">\r\n                  <i class="fa fa-times" aria-hidden="true"  data-verifyid="'+c(typeof(s=null!=(s=l.id||(null!=a?a.id:a))?s:i)==d?s.call(o,{name:"id",hash:{},data:r}):s)+'"></i>\r\n           </td>\r\n\r\n\r\n               <td> <a href="javascript:;">\r\n                  <i class="fa fa-trash" aria-hidden="true"  data-applicationid="'+c(typeof(s=null!=(s=l.id||(null!=a?a.id:a))?s:i)==d?s.call(o,{name:"id",hash:{},data:r}):s)+'"></i>\r\n                  \r\n                     \r\n'},compiler:[7,">= 4.0.0"],main:function(t,a,l,n,r){var e;return'<div class="row">\r\n   <div class="col-sm-12">\r\n     \r\n      <p>&nbsp;</p>  \r\n      <table class="table table-striped table-hover table-condensed" id="tbl1">\r\n         <thead>\r\n            <tr>\r\n               <th>Index</th>\r\n               <th>Superhero Name</th>\r\n               <th>Cape</th>\r\n               <th>Mask</th>\r\n               <th>Costume</th>\r\n               <th>Superhero Power</th>\r\n               <th>Added</th>\r\n               <th>Status</th>\r\n               <th>Delete</th>\r\n            </tr>\r\n         </thead>\r\n         <tbody>\r\n'+(null!=(e=l.each.call(null!=a?a:t.nullContext||{},null!=a?a.applications:a,{name:"each",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?e:"")+"         </tbody>\r\n      </table>\r\n   </div>\r\n</div>"},useData:!0}),a.applicationinsertform=t({compiler:[7,">= 4.0.0"],main:function(){return'<div class="row">\r\n   <div class="col-sm-6">  \r\n\t\t<form class="form-horizontal" id="formaddapplication">\r\n\t\t  <fieldset>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="name" class="col-lg-3 control-label">SuperHero Name</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="name" placeholder="Your Name" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="cape" class="col-lg-3 control-label">Cape</label>\r\n\t\t        <div class="col-lg-9">\r\n\t\t         <input type="radio" name="cape"  value="Yes"> Yes<br>\r\n                 <input type="radio" name= "cape"   value="No"> No<br>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\r\n \r\n\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="Mask" class="col-lg-3 control-label">Mask</label>\r\n\t\t        <div class="col-lg-9">\r\n\t\t        <input type="radio" name= "mask"   value="Yes"> Yes<br>\r\n\t\t\t\t<input type="radio" name="mask"  value="No"> No<br>\r\n\t\t        </div>\r\n\t\t    </div> \r\n\r\n             <div class="form-group">\r\n\t\t      <label for="Costume" class="col-lg-3 control-label">Costume</label>\r\n\t\t        <div class="col-lg-9">\r\n\t\t         <input type="radio" name="costume"  value="Yes"> Yes<br>\r\n\t\t\t\t <input type="radio" name="costume"  value="No"> No<br>\r\n\t\t        </div>\r\n            </div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t      <label for="superpower" class="col-lg-3 control-label">SuperPower</label>\r\n\t\t        <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="superpower" placeholder="Your Superpower" required>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\r\n\t\t    <div class="form-group">\r\n\t\t      <div class="col-lg-9 col-lg-offset-3">\r\n\t\t      \t<a href="#contacts" class="btn btn-danger">Back</a>\r\n\t\t        <button type="reset" class="btn btn-default">Reset</button>\r\n\t\t        <button type="submit" class="btn btn-primary">Submit</button>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </fieldset>\r\n\t\t</form>   \r\n   </div>\r\n</div>'},useData:!0}),a.applications=t({1:function(t,a,l,n,r){var e,s,o=null!=a?a:t.nullContext||{},i=l.helperMissing,d="function",c=t.escapeExpression;return"            <tr>\r\n               <td class='index-column'>"+c(typeof(s=null!=(s=l.id||(null!=a?a.id:a))?s:i)==d?s.call(o,{name:"id",hash:{},data:r}):s)+'</td>\r\n               <td><a href="#applications/view/'+c(typeof(s=null!=(s=l.id||(null!=a?a.id:a))?s:i)==d?s.call(o,{name:"id",hash:{},data:r}):s)+'">'+c(typeof(s=null!=(s=l.name||(null!=a?a.name:a))?s:i)==d?s.call(o,{name:"name",hash:{},data:r}):s)+"</a></td>\r\n               <td>"+c(typeof(s=null!=(s=l.cape||(null!=a?a.cape:a))?s:i)==d?s.call(o,{name:"cape",hash:{},data:r}):s)+"</td>\r\n               <td>"+c(typeof(s=null!=(s=l.mask||(null!=a?a.mask:a))?s:i)==d?s.call(o,{name:"mask",hash:{},data:r}):s)+"</td>\r\n               <td>"+c(typeof(s=null!=(s=l.costume||(null!=a?a.costume:a))?s:i)==d?s.call(o,{name:"costume",hash:{},data:r}):s)+"</td>\r\n               <td>"+c(typeof(s=null!=(s=l.superpower||(null!=a?a.superpower:a))?s:i)==d?s.call(o,{name:"superpower",hash:{},data:r}):s)+'</td>\r\n               <td><span class="label label-info">'+c(typeof(s=null!=(s=l.addeddate||(null!=a?a.addeddate:a))?s:i)==d?s.call(o,{name:"addeddate",hash:{},data:r}):s)+"</span></td>\r\n           <td>"+(null!=(e=(l.displayverify||a&&a.displayverify||i).call(o,null!=a?a.verify:a,{name:"displayverify",hash:{},data:r}))?e:"")+"</td>\r\n                 \r\n                  \r\n                    \r\n"},compiler:[7,">= 4.0.0"],main:function(t,a,l,n,r){var e;return'<div class="row">\r\n   <div class="col-sm-12">\r\n      <a class="btn btn-primary" href="#applications/addapplication" role="button">Add Application</a> \r\n     \r\n      <p>&nbsp;</p>  \r\n      <table class="table table-striped table-hover table-condensed" id="tbl1">\r\n         <thead>\r\n            <tr>\r\n               <th>Index</th>\r\n               <th>Superhero Name</th>\r\n               <th>Mask</th>\r\n               <th>Cape</th>\r\n               <th>Costume</th>\r\n               <th>Superhero Power</th>\r\n               <th>Added</th>\r\n               <th>Status</th>\r\n            </tr>\r\n         </thead>\r\n         <tbody>\r\n'+(null!=(e=l.each.call(null!=a?a:t.nullContext||{},null!=a?a.applications:a,{name:"each",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?e:"")+"         </tbody>\r\n      </table>\r\n   </div>\r\n</div>"},useData:!0}),a.applicationviewform=t({compiler:[7,">= 4.0.0"],main:function(t,a,l,n,r){var e,s=null!=a?a:t.nullContext||{},o=l.helperMissing,i="function",d=t.escapeExpression;return'<div class="row">\r\n   <div class="col-sm-6">  \r\n\t\t<form class="form-horizontal" id="formupdateapplication">\r\n\t\t  <fieldset>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="name" class="col-lg-3 control-label">SuperHero Name</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="name" value=\''+d(typeof(e=null!=(e=l.name||(null!=a?a.name:a))?e:o)==i?e.call(s,{name:"name",hash:{},data:r}):e)+'\'  required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="email" class="col-lg-3 control-label">Cape</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t         <input type="radio" name="cape" id="cape" value="Yes"> Yes<br>\r\n\t\t\t\t\t\t<input type="radio" name="cape" id="cape" value="No"> No<br>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="mobileno" class="col-lg-3 control-label">Mask</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="radio" name="mask" id="mask" value="Yes"> Yes<br>\r\n\t\t\t\t\t\t<input type="radio" name="mask" id="mask" value="No"> No<br>\r\n\t\t      </div>\r\n\t\t    </div>\r\n  <div class="form-group">\r\n\t\t      <label for="mobileno" class="col-lg-3 control-label">Costume</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t         <input type="radio" name="costume" id="costume" value="Yes"> Yes<br>\r\n\t\t\t\t\t\t<input type="radio" name="costume" id="costume" value="No"> No<br>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\r\n\t\t\t\t<div class="form-group">\r\n\t\t      <label for="mobileno" class="col-lg-3 control-label">SuperPower</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="Superpower" placeholder="Your Superpower" value=\''+d(typeof(e=null!=(e=l.superpower||(null!=a?a.superpower:a))?e:o)==i?e.call(s,{name:"superpower",hash:{},data:r}):e)+'\' required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\r\n\t\t    <div class="form-group">\r\n\t\t      <div class="col-lg-9 col-lg-offset-3">\r\n\t\t      \t<input type="hidden" id="applicationid" value="'+d(typeof(e=null!=(e=l.id||(null!=a?a.id:a))?e:o)==i?e.call(s,{name:"id",hash:{},data:r}):e)+'">\r\n\t\t      \t<a href="#contacts" class="btn btn-danger">Back</a>\r\n\t\t        <button type="reset" class="btn btn-default">Reset</button>\r\n\t\t        <button type="submit" class="btn btn-primary">Submit</button>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </fieldset>\r\n\t\t</form>   \r\n   </div>\r\n</div>'},useData:!0}),a.home=t({compiler:[7,">= 4.0.0"],main:function(){return'<div class="row">\r\n   <div class="col-sm-12">   \r\n      Hello\r\n   </div>\r\n</div>'},useData:!0}),a.profile=t({compiler:[7,">= 4.0.0"],main:function(){return'<div class="row">\r\n   <div class="col-sm-12">   \r\n      This is profile\r\n   </div>\r\n</div>'},useData:!0})}();
