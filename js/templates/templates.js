!function(){var t=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l.about=t({compiler:[7,">= 4.0.0"],main:function(){return'<div class="row">\r\n   <div class="col-sm-12">   \r\n      This is about\r\n   </div>\r\n</div>'},useData:!0}),l.applicationinsertform=t({compiler:[7,">= 4.0.0"],main:function(){return'<div class="row">\r\n   <div class="col-sm-6">  \r\n\t\t<form class="form-horizontal" id="formaddapplication">\r\n\t\t  <fieldset>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="name" class="col-lg-3 control-label">SuperHero Name</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="name" placeholder="Your Name" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="cape" class="col-lg-3 control-label">Cape</label>\r\n\t\t        <div class="col-lg-9">\r\n\t\t         <input type="radio" name="cape"  value="Yes"> Yes<br>\r\n                 <input type="radio" name= "cape"   value="No"> No<br>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\r\n \r\n\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="Mask" class="col-lg-3 control-label">Mask</label>\r\n\t\t        <div class="col-lg-9">\r\n\t\t        <input type="radio" name= "mask"   value="Yes"> Yes<br>\r\n\t\t\t\t<input type="radio" name="mask"  value="No"> No<br>\r\n\t\t        </div>\r\n\t\t    </div> \r\n\r\n             <div class="form-group">\r\n\t\t      <label for="Costume" class="col-lg-3 control-label">Costume</label>\r\n\t\t        <div class="col-lg-9">\r\n\t\t         <input type="radio" name="costume"  value="Yes"> Yes<br>\r\n\t\t\t\t <input type="radio" name="costume"  value="No"> No<br>\r\n\t\t        </div>\r\n            </div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t      <label for="superpower" class="col-lg-3 control-label">SuperPower</label>\r\n\t\t        <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="superpower" placeholder="Your Superpower" required>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\r\n\t\t    <div class="form-group">\r\n\t\t      <div class="col-lg-9 col-lg-offset-3">\r\n\t\t      \t<a href="#contacts" class="btn btn-danger">Back</a>\r\n\t\t        <button type="reset" class="btn btn-default">Reset</button>\r\n\t\t        <button type="submit" class="btn btn-primary">Submit</button>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </fieldset>\r\n\t\t</form>   \r\n   </div>\r\n</div>'},useData:!0}),l.applications=t({1:function(t,l,n,a,r){var e,o,s=null!=l?l:t.nullContext||{},i=n.helperMissing,d="function",c=t.escapeExpression;return"            <tr>\r\n               <td class='index-column'>"+c(typeof(o=null!=(o=n.id||(null!=l?l.id:l))?o:i)==d?o.call(s,{name:"id",hash:{},data:r}):o)+'</td>\r\n               <td><a href="#applications/view/'+c(typeof(o=null!=(o=n.id||(null!=l?l.id:l))?o:i)==d?o.call(s,{name:"id",hash:{},data:r}):o)+'">'+c(typeof(o=null!=(o=n.name||(null!=l?l.name:l))?o:i)==d?o.call(s,{name:"name",hash:{},data:r}):o)+"</a></td>\r\n               <td>"+c(typeof(o=null!=(o=n.cape||(null!=l?l.cape:l))?o:i)==d?o.call(s,{name:"cape",hash:{},data:r}):o)+"</td>\r\n               <td>"+c(typeof(o=null!=(o=n.mask||(null!=l?l.mask:l))?o:i)==d?o.call(s,{name:"mask",hash:{},data:r}):o)+"</td>\r\n               <td>"+c(typeof(o=null!=(o=n.costume||(null!=l?l.costume:l))?o:i)==d?o.call(s,{name:"costume",hash:{},data:r}):o)+"</td>\r\n               <td>"+c(typeof(o=null!=(o=n.superpower||(null!=l?l.superpower:l))?o:i)==d?o.call(s,{name:"superpower",hash:{},data:r}):o)+'</td>\r\n               <td><span class="label label-info">'+c(typeof(o=null!=(o=n.addeddate||(null!=l?l.addeddate:l))?o:i)==d?o.call(s,{name:"addeddate",hash:{},data:r}):o)+"</span></td>\r\n           <td>"+(null!=(e=(n.displayverify||l&&l.displayverify||i).call(s,null!=l?l.verify:l,{name:"displayverify",hash:{},data:r}))?e:"")+'</td>\r\n               <td>\r\n                  <a href="javascript:;">\r\n                  <i class="fa fa-trash" aria-hidden="true"  data-applicationid="'+c(typeof(o=null!=(o=n.id||(null!=l?l.id:l))?o:i)==d?o.call(s,{name:"id",hash:{},data:r}):o)+'"></i>\r\n'},compiler:[7,">= 4.0.0"],main:function(t,l,n,a,r){var e;return'<div class="row">\r\n   <div class="col-sm-12">\r\n      <a class="btn btn-primary" href="#applications/addapplication" role="button">Add Application</a> \r\n     \r\n      <p>&nbsp;</p>  \r\n      <table class="table table-striped table-hover table-condensed" id="tbl1">\r\n         <thead>\r\n            <tr>\r\n               <th>Index</th>\r\n               <th>Superhero Name</th>\r\n               <th>Mask</th>\r\n               <th>Cape</th>\r\n               <th>Costume</th>\r\n               <th>Superhero Power</th>\r\n               <th>Added</th>\r\n               <th>Status</th>\r\n               <th>Delete</th>\r\n            </tr>\r\n         </thead>\r\n         <tbody>\r\n'+(null!=(e=n.each.call(null!=l?l:t.nullContext||{},null!=l?l.applications:l,{name:"each",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?e:"")+"         </tbody>\r\n      </table>\r\n   </div>\r\n</div>"},useData:!0}),l.applicationviewform=t({compiler:[7,">= 4.0.0"],main:function(t,l,n,a,r){var e,o=null!=l?l:t.nullContext||{},s=n.helperMissing,i="function",d=t.escapeExpression;return'<div class="row">\r\n   <div class="col-sm-6">  \r\n\t\t<form class="form-horizontal" id="formupdateapplication">\r\n\t\t  <fieldset>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="name" class="col-lg-3 control-label">Name</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="name" value="'+d(typeof(e=null!=(e=n.name||(null!=l?l.name:l))?e:s)==i?e.call(o,{name:"name",hash:{},data:r}):e)+'" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="email" class="col-lg-3 control-label">Email</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="email" class="form-control" id="email" value="'+d(typeof(e=null!=(e=n.email||(null!=l?l.email:l))?e:s)==i?e.call(o,{name:"email",hash:{},data:r}):e)+'" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="mobileno" class="col-lg-3 control-label">Mobile No</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="mobileno" value="'+d(typeof(e=null!=(e=n.mobileno||(null!=l?l.mobileno:l))?e:s)==i?e.call(o,{name:"mobileno",hash:{},data:r}):e)+'" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <div class="col-lg-9 col-lg-offset-3">\r\n\t\t      \t<input type="hidden" id="applicationsid" value="'+d(typeof(e=null!=(e=n.id||(null!=l?l.id:l))?e:s)==i?e.call(o,{name:"id",hash:{},data:r}):e)+'">\r\n\t\t      \t<a href="#contacts" class="btn btn-danger">Back</a>\r\n\t\t        <button type="reset" class="btn btn-default">Reset</button>\r\n\t\t        <button type="submit" class="btn btn-primary">Submit</button>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </fieldset>\r\n\t\t</form>   \r\n   </div>\r\n</div>'},useData:!0}),l.contactinsertform=t({compiler:[7,">= 4.0.0"],main:function(){return'<div class="row">\r\n   <div class="col-sm-6">  \r\n\t\t<form class="form-horizontal" id="formaddcontact">\r\n\t\t  <fieldset>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="name" class="col-lg-3 control-label">SuperHero Name</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="name" placeholder="Your Name" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="email" class="col-lg-3 control-label">Cape</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t         <input type="radio" name="cape" id="cape" value="Yes"> Yes<br>\r\n\t\t\t\t\t\t<input type="radio" name="cape" id="cape" value="No"> No<br>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="mobileno" class="col-lg-3 control-label">Mask</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="radio" name="mask" id="mask" value="Yes"> Yes<br>\r\n\t\t\t\t\t\t<input type="radio" name="mask" id="mask" value="No"> No<br>\r\n\t\t      </div>\r\n\t\t    </div>\r\n  <div class="form-group">\r\n\t\t      <label for="mobileno" class="col-lg-3 control-label">Costume</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t         <input type="radio" name="costume" id="costume" value="Yes"> Yes<br>\r\n\t\t\t\t\t\t<input type="radio" name="costume" id="costume" value="No"> No<br>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\r\n\t\t\t\t<div class="form-group">\r\n\t\t      <label for="mobileno" class="col-lg-3 control-label">SuperPower</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="Superpower" placeholder="Your Superpower" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\r\n\t\t    <div class="form-group">\r\n\t\t      <div class="col-lg-9 col-lg-offset-3">\r\n\t\t      \t<a href="#contacts" class="btn btn-danger">Back</a>\r\n\t\t        <button type="reset" class="btn btn-default">Reset</button>\r\n\t\t        <button type="submit" class="btn btn-primary">Submit</button>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </fieldset>\r\n\t\t</form>   \r\n   </div>\r\n</div>'},useData:!0}),l.contacts=t({1:function(t,l,n,a,r){var e,o=null!=l?l:t.nullContext||{},s=n.helperMissing,i="function",d=t.escapeExpression;return"            <tr>\r\n               <td class='index-column'>"+d(typeof(e=null!=(e=n.id||(null!=l?l.id:l))?e:s)==i?e.call(o,{name:"id",hash:{},data:r}):e)+'</td>\r\n               <td><a href="#contacts/view/'+d(typeof(e=null!=(e=n.id||(null!=l?l.id:l))?e:s)==i?e.call(o,{name:"id",hash:{},data:r}):e)+'">'+d(typeof(e=null!=(e=n.name||(null!=l?l.name:l))?e:s)==i?e.call(o,{name:"name",hash:{},data:r}):e)+"</a></td>\r\n               <td>"+d(typeof(e=null!=(e=n.mobileno||(null!=l?l.mobileno:l))?e:s)==i?e.call(o,{name:"mobileno",hash:{},data:r}):e)+"</td>\r\n               <td>"+d(typeof(e=null!=(e=n.email||(null!=l?l.email:l))?e:s)==i?e.call(o,{name:"email",hash:{},data:r}):e)+"</td>\r\n               <td>"+d(typeof(e=null!=(e=n.photo||(null!=l?l.photo:l))?e:s)==i?e.call(o,{name:"photo",hash:{},data:r}):e)+"</td>\r\n               <td>"+d(typeof(e=null!=(e=n.ownerlogin||(null!=l?l.ownerlogin:l))?e:s)==i?e.call(o,{name:"ownerlogin",hash:{},data:r}):e)+'</td>\r\n               \r\n               <td><span class="label label-primary">'+d(typeof(e=null!=(e=n.addeddate||(null!=l?l.addeddate:l))?e:s)==i?e.call(o,{name:"addeddate",hash:{},data:r}):e)+"</span></td>\r\n               <td>"+d(typeof(e=null!=(e=n.status||(null!=l?l.status:l))?e:s)==i?e.call(o,{name:"status",hash:{},data:r}):e)+'</td>\r\n               <td>\r\n                  <a href="javascript:;">\r\n                  <i class="fa fa-trash" aria-hidden="true"  data-contactid="'+d(typeof(e=null!=(e=n.id||(null!=l?l.id:l))?e:s)==i?e.call(o,{name:"id",hash:{},data:r}):e)+'"></i>\r\n'},compiler:[7,">= 4.0.0"],main:function(t,l,n,a,r){var e;return'<div class="row">\r\n   <div class="col-sm-12">\r\n      <a class="btn btn-primary" href="#contacts/addaaapplication" role="button">Add Application</a> \r\n     \r\n      <p>&nbsp;</p>  \r\n      <table class="table table-striped table-hover table-condensed" id="tbl1">\r\n         <thead>\r\n            <tr>\r\n               <th>Index</th>\r\n               <th>Superhero Name</th>\r\n               <th>Mask</th>\r\n               <th>Cape</th>\r\n               <th>Costume</th>\r\n               <th>Superhero Power</th>\r\n               <th>Added</th>\r\n               <th>Status</th>\r\n               <th>Delete</th>\r\n            </tr>\r\n         </thead>\r\n         <tbody>\r\n'+(null!=(e=n.each.call(null!=l?l:t.nullContext||{},null!=l?l.contacts:l,{name:"each",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?e:"")+"         </tbody>\r\n      </table>\r\n   </div>\r\n</div>"},useData:!0}),l.contactviewform=t({compiler:[7,">= 4.0.0"],main:function(t,l,n,a,r){var e,o=null!=l?l:t.nullContext||{},s=n.helperMissing,i="function",d=t.escapeExpression;return'<div class="row">\r\n   <div class="col-sm-6">  \r\n\t\t<form class="form-horizontal" id="formupdatecontact">\r\n\t\t  <fieldset>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="name" class="col-lg-3 control-label">Name</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="name" value="'+d(typeof(e=null!=(e=n.name||(null!=l?l.name:l))?e:s)==i?e.call(o,{name:"name",hash:{},data:r}):e)+'" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="email" class="col-lg-3 control-label">Email</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="email" class="form-control" id="email" value="'+d(typeof(e=null!=(e=n.email||(null!=l?l.email:l))?e:s)==i?e.call(o,{name:"email",hash:{},data:r}):e)+'" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="mobileno" class="col-lg-3 control-label">Mobile No</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="mobileno" value="'+d(typeof(e=null!=(e=n.mobileno||(null!=l?l.mobileno:l))?e:s)==i?e.call(o,{name:"mobileno",hash:{},data:r}):e)+'" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <div class="col-lg-9 col-lg-offset-3">\r\n\t\t      \t<input type="hidden" id="contactid" value="'+d(typeof(e=null!=(e=n.id||(null!=l?l.id:l))?e:s)==i?e.call(o,{name:"id",hash:{},data:r}):e)+'">\r\n\t\t      \t<a href="#contacts" class="btn btn-danger">Back</a>\r\n\t\t        <button type="reset" class="btn btn-default">Reset</button>\r\n\t\t        <button type="submit" class="btn btn-primary">Submit</button>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </fieldset>\r\n\t\t</form>   \r\n   </div>\r\n</div>'},useData:!0}),l.home=t({compiler:[7,">= 4.0.0"],main:function(){return'<div class="row">\r\n   <div class="col-sm-12">   \r\n      Hello\r\n   </div>\r\n</div>'},useData:!0}),l.profile=t({compiler:[7,">= 4.0.0"],main:function(){return'<div class="row">\r\n   <div class="col-sm-12">   \r\n      This is profile\r\n   </div>\r\n</div>'},useData:!0})}();
