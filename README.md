IMAGE
# Introduction
This project came about as a means of trying to solve an issue within the physics and chemistry departments at my high school; namely, the issue of inventory management. We often have a large array of tools that are difficult to track when teachers are taking them from a central location, such as the physics closet or the chemicals storage supply closet of the chemistry department.

As a result, I created a spreadsheet on Google Sheets that has an embedded Graphical User Interface (GUI) and uses a barcode scanner to check in and check out items. What follows is a tutorial of the main features of the Google Sheet.

I do recommend having a separate computer with a touchscreen, such as a Raspberry Pi, to run the Google Sheet and connect the barcode scanner to.
# Setting Up
The first thing you need to do to set up the sheet is to download the Complete Inventory System sheet. Then, upload the sheet to Google Drive and open it. Unfortunately, there's still an additional step here and that is to click on File -> Save as Google Sheets; otherwise, the following options do not show.

![Image_2](https://github.com/user-attachments/assets/26f97cc5-d1bf-40f1-abb7-f4c4d1627a4d)

In the new Google Sheet, go over to Extensions -> Apps Script. Here, copy and paste the Code.gs file contents into your Code.gs. Press "Save to Drive" then "Run." You will be greeted with this screen:

![Image_3](https://github.com/user-attachments/assets/97436720-612c-4dd2-a9f4-5bb17853798f)

Review the permissions and advance. We still need to add several more files. Create the following files and keep them empty for now:
1. adduser.html
2. deleteuser.html
3. addnewitems.html
4. removeitems.html
5. returnitems.html
6. deleteitems.html

![Image_4](https://github.com/user-attachments/assets/00ed714f-f6d7-4c13-9a48-982a90a1a4ac)

Once you have created these, add contents of each corresponding file by copying and pasting it from the files here. Make sure to save all the files in the Apps Script.

Now, go back to the Interface page. Click on the top right of each of the six tools and assign the appropriate script (please note, the appropriate scripts are showremoveitems, showaddnewitems, showreturnitems, showdeleteitem, showaddnewuser, and showdeleteuser - since these are GUI versions, I put "show" in front).
![Image_5](https://github.com/user-attachments/assets/d8bf93c0-b279-4d93-bbcb-e8f5379f119b)



7. 
# 3D-Printed Inverter Magnet (Magnets Holder)
![Image_2](https://github.com/user-attachments/assets/70fda216-17b3-48f9-8678-9de0781e7feb)
The design I settled on utilizes one interior magnet alongside ten exterior magnets. I designed it on OnShape and then proceeded to print it using my Original Prusa Mini+ and using PrusaSlicer.
# Specifications & Material(s)
Below you can find the printer and material used.
## 3D Printer
 Original Prusa Mini+
## Material(s)
INLAND PLA 3D Printer Filament - 3D Printing PLA Filament 1.75mm, Dimensional Accuracy +/- 0.03mm - 1kg Cardboard Spool (2.2 lbs), Marble PLA
 – this can be purchased for $29.99 at the following link:
https://www.amazon.com/Inland-1-75mm-Marble-Printer-Filament/dp/B08M4733VV/ref=sr_1_3?crid=RY0788Z9D3XL&dib=eyJ2IjoiMSJ9.GvDUjGeacdaThMoKB2T31ewH9i3JmlLfhoDydChHBm-pD7cXPBEVjrKUewiIA1ZLE0_09V1n0PRn75b7hFqiDw4M0-lnl6NiRKwU4Bay_UQglrp8aVfnSITNRxxnTlk00zi7jk9JMRR5mzHilVguVNlu22jSBhxaIA2Mgu28qpM98QySMqZ0onKGj8rI2Ae99hyhSl7nTwlWuBccngRzfk5tlxoLLDb3Ck8adz-NTaQ.5vcyT03Wl1FkUx1DENvwhSOMvdqbl_TQCjXICAq7kSI&dib_tag=se&keywords=pla+filament+inland+marble&qid=1735843633&sprefix=pla+filament+inland+marble%2Caps%2C87&sr=8-3
# Software
 PrusaSlicer
![Image_3](https://github.com/user-attachments/assets/1701ac93-f0d4-4695-80bd-659dac15fa1f)
## Settings
  Layer Height: .2mm \
  Infill: 50% \
  Supports: None \
  Estimated Printing Time: 1 hour and 17 minutes
# Magnets - Arrangement and Material(s)
This is the most important part because wrongfully attaching magnets will cause issues with the magnetic field and thereby making the “tractor beam” effect null.
## Magnets Arrangement
To make this inverter work, we need two sets of “magnets”. The first is made up of two 20mm diameter, 3mm thickness neodymium magnets stacked on top of each other, like so:
![Image_4](https://github.com/user-attachments/assets/0fdad79c-7cc3-4215-baeb-50a942235f72)
The second is for the 3D printed part. Take 4 5mm diameter, 1 mm thickness magnets, stacked on top of each other, and make sure they repel the two large magnets. Create ten sets of these and insert them into the 3D-printed part like so:
![Image_5](https://github.com/user-attachments/assets/7727e89c-4e56-4da6-afcf-5922a629d18e)
After doing this, take another 20mm diameter, 3mm thickness magnet and make sure it attracts the two 20mm diameter, 3mm thickness magnets stacked on top of each other. Place three 12mm diameter, 2mm thickness neodymium magnets atop the center of the first 20mm diameter, 3 mm thickness magnet, followed by two 10mm diameter, 2mm thickness neodymium magnets on top as well. Push this into the 3D-printed part.

Congratulations, you now have a fully-assembled inverter magnet! Time to test it! Hopefully you will see something like this:

https://github.com/user-attachments/assets/49302779-e3c6-465c-8665-3d15ed1d7994
## Material(s)
20x3mm Strong Neodymium Magnet, 25Pcs – this can be purchased for $13.99 at the following link:
https://www.amazon.com/gp/product/B0CJ33WWZ9/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1

500 Pieces Small Magnets, Small Magnets Rare Earth Magnets Tiny Neodymium Disc Magnets – this can be purchased for $11.97 at the following link: https://www.amazon.com/gp/product/B0BWD7H7Z9/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1

TRYMAG Small Magnets 60Pcs, 12x2mm Neodymium Magnets, Tiny Strong Small Round Magnets – this can be purchased for $9.99 at the following link: https://www.amazon.com/TRYMAG-Magnets-Neodymium-Refrigerator-Whiteboard/dp/B0CLZP57FD/ref=sr_1_6?crid=Z915WUNALDZT&dib=eyJ2IjoiMSJ9.lDwRWM83zO8KGI48y_Fh9OdcU2HH7q_dn_wgRNFxGZrRE73s3UrwVE_T2PtMXcBHJXs9vZBDzj5eKWbCvYQMi3bd4t9n3kz4mx-diLIbOrxZfT5oeIjrveO2iS-SYft7XxnmOCLSJdq6cADP8ZyC_J72aow08pmLcemV2XWZaojUqjJ3iu0PwMn6fzDpNZYAuqHMvB-j3R8_eVk3sVODhAcCz_hhjqiEWioUzlHXJGo.0gdPJB8_ETQfY53zps-iSuHfcmOvzVzFxEHqqBNJuO8&dib_tag=se&keywords=12mm+neodymium+magnets&qid=1735872477&sprefix=12mm+neodynium+magnet%2Caps%2C112&sr=8-6
  
DIYMAG 120Pcs Refrigerator Magnets 10x2mm Premium Brushed Nickel Small Round Cylinder Fridge Magnet – this can be purchased for $12.99 at the following link: https://www.amazon.com/gp/product/B0753ZPBLQ/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1
# Tips
It is highly recommended to do this on a flat surface that is smooth; for example, doing it on a laminated surface seems to work really well.

It is also important to move slowly with the magnet because it does have an uneven magnetic field in the configuration that I have at the moment.
