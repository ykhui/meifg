---
title: "Contact"
class: "contact-page"
background: "../img/contact/bg.jpg"
tint: "blue"
type: "template"
layout: "contact"
---
<div class="container content-contact-left">
  <div class="row">
    <div class="col-sm-2">
      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link nav-link-contact active" id="v-pills-contact-tab" data-toggle="pill" href="#v-pills-contact" role="tab" aria-controls="v-pills-contact" aria-selected="true">Contact</a>
        <a class="nav-link nav-link-contact" id="v-pills-career-tab" data-toggle="pill" href="#v-pills-career" role="tab" aria-controls="v-pills-career" aria-selected="false">Career</a>
      </div>
    </div>
    <div class="col-sm-10">
      <div class="tab-content" id="v-pills-tabContent">  
        <div class="tab-pane fade show active" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab">
          <div class="row">
            <div class="col-sm-6 mr-auto">
              <div class="contactform">
                <h2 class="title">Contact Us</h2>
                <p class="description">You can contact us with anything related to our Products. We'll get in touch with you as soon as possible.<br><br>
                </p>
                <form role="form" id="contact-form" method="post" netlify>
                  <label>Company</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="now-ui-icons users_circle-08"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Company Name..." aria-label="Company Name..." >
                  </div>
                  <label>Email address</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" ><i class="now-ui-icons ui-1_email-85"></i></span>
                    </div>
                    <input type="email" class="form-control" placeholder="Email Here..." aria-label="Email Here...">
                  </div>
                  <label>Phone</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="now-ui-icons tech_mobile"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Number Here...">
                  </div>
                  <div class="form-group">
                    <label>Your message</label>
                    <textarea name="message" class="form-control" id="message" rows="6"></textarea>
                  </div>
                  <div class="submit text-center">
                    <input type="submit" class="btn btn-primary btn-raised btn-round" value="Contact Us" />
                  </div>
                </form>
              </div>
            </div>
            <div class="col-sm-6 mr-auto">          
              <div class="info info-horizontal">
                <div class="icon icon-primary">
                  <i class="now-ui-icons location_pin icon-location"></i>
                </div>
                <div class="description">
                  <h4 class="info-title">Address</h4>
                  <p> Level 14 Office No 4<br />
                      Salam Tower, West Bay, Doha, Qatar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="v-pills-career" role="tabpanel" aria-labelledby="v-pills-career-tab">
            <p>
              why work with us paragraph showcase.
            </p>         
        </div>
      </div>
    </div>
  </div>
</div>
