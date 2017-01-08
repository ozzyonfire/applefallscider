$( document ).ready(function() {
  createContactFooter($('#contact'));
  createContactUsSection($('#contact-us'));
});

var createContactUsSection = function(contactElement) {
  createContacts(contactElement, false);
};

var createContactFooter = function(contactElement) {
  createContacts(contactElement, true);
}

var createContacts = function (contactElement, footer) {
  if (contactElement == null || contactElement == undefined) {
    return;
  }

  var section = footer ? $('<aside>').addClass('bg-dark') : $('<section>').addClass('bg-primary');
  var container = $('<div class="container"></div>');
  var row = $('<div class="row text-center"></div>');

  // email
  var aEmail = $('<a/>');
  aEmail.attr('href', "mailto:info@applefallscider.ca");
  aEmail.addClass('alt');
  aEmail.html('info@applefallscider.ca');
  row.append(createContactIcon('fa-envelope-o', 'Email', "mailto:info@applefallscider.ca", footer, aEmail));

  // address
  var aAddress = $('<a/>').attr('href', 'https://goo.gl/maps/XWosM94nhnp');
  aAddress.attr('target', '_blank');
  aAddress.addClass('alt');
  aAddress.html('1633 County Rd. #3<br>Carrying Place, Ontario<br>K0K 1L0');
  row.append(createContactIcon('fa-address-card-o', 'Address', 'https://goo.gl/maps/XWosM94nhnp', footer, aAddress));

  // phone
  var aPhone = $('<a/>');
  aPhone.attr('href', 'tel:+1-613-242-8433');
  aPhone.addClass('alt');
  aPhone.html('(613) 242-8433');
  row.append(createContactIcon('fa-phone', 'Phone', 'tel:+1-613-242-8433', footer, aPhone));

  // facebook
  row.append(createContactIcon('fa-facebook', 'Facebook', 'https://www.facebook.com/applefallscider', footer));

  // twitter
  row.append(createContactIcon('fa-twitter', 'Twitter', 'https://twitter.com/AppleFallsCider', footer));

  // instagram
  row.append(createContactIcon('fa-instagram', 'Instagram', 'https://www.instagram.com/applefallscider/', footer));

  if (!footer) {
    // create the title
    var titleRow = $('<div/>').addClass('row');
    var col = $('<div/>').addClass('col-lg-12 text-center');
    col.append('<h2 class="section-heading">Contact Us</h2>');
    col.append('<hr class="light">');

    titleRow.append(col);
    container.append(titleRow);
  }

  container.append(row);
  section.append(container);
  contactElement.append(section);
};

var createContactIcon = function(iconName, name, link, footer, a) {
  var section = $('<div class="col-lg-2 col-md-2 col-sm-6"></div>');
  var serviceBox = $('<div/>').addClass('service-box');

  var aLink = $('<a/>');
  aLink.attr('href', link);
  if (!footer) {
    aLink.addClass('alt');
  }
  aLink.attr('target', '_blank');
  
  var icon = $('<i/>');
  icon.addClass('fa fa-2x wow bounceIn');
  icon.addClass(iconName);
  icon.attr('data-wow-delay', '0s');

  aLink.append(icon);
  serviceBox.append(aLink);

  if (!footer) {
    serviceBox.append('<h3>'+name+'</h3>');
    if (a != null) {
      serviceBox.append(a);
    }
  }

  section.append(serviceBox);
  return section;
};