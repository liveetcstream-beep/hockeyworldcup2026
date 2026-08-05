// Prompts for the remaining 7 teams to be generated once the Google Actions image generator quota resets.
// Each prompt specifies the exact layout, colors, and players for that country.

const PROMPTS = {
  pakistan: {
    name: "pin-pakistan",
    prompt: "A high-impact vertical Pinterest pin graphic design (2:3 aspect ratio, 1000x1500px). Bold black typography at the top inside a stylized white header bubble reads: 'PAKISTAN HOCKEY HWC 2026 SCHEDULE'. Sub-text reads: 'Official Match Fixtures, Local Timezone Converter & PDF Downloads'. Near the bottom, the website URL is cleanly displayed: 'hockeyworldcup2026schedule.com'. The background features a dramatic, high-speed action shot of a professional male Pakistani field hockey player with short hair wearing a dark green jersey with white accents on a blue turf pitch. Sleek sports branding, high contrast."
  },
  india: {
    name: "pin-india",
    prompt: "A high-impact vertical Pinterest pin graphic design (2:3 aspect ratio, 1000x1500px). Bold black typography at the top inside a stylized white header bubble reads: 'INDIA HOCKEY HWC 2026 SCHEDULE'. Sub-text reads: 'Official Match Fixtures, Local Timezone Converter & PDF Downloads'. Near the bottom, the website URL is cleanly displayed: 'hockeyworldcup2026schedule.com'. The background features a dramatic, high-speed action shot of a professional male Indian field hockey player with short hair wearing a light blue jersey with orange accents on a blue turf pitch. Sleek sports branding, high contrast."
  },
  australia: {
    name: "pin-australia",
    prompt: "A high-impact vertical Pinterest pin graphic design (2:3 aspect ratio, 1000x1500px). Bold black typography at the top inside a stylized white header bubble reads: 'AUSTRALIA HOCKEY HWC 2026 SCHEDULE'. Sub-text reads: 'Official Match Fixtures, Local Timezone Converter & PDF Downloads'. Near the bottom, the website URL is cleanly displayed: 'hockeyworldcup2026schedule.com'. The background features a dramatic, high-speed action shot of a professional male Australian field hockey player with short hair wearing a yellow jersey with green accents on a blue turf pitch. Sleek sports branding, high contrast."
  },
  spain: {
    name: "pin-spain",
    prompt: "A high-impact vertical Pinterest pin graphic design (2:3 aspect ratio, 1000x1500px). Bold black typography at the top inside a stylized white header bubble reads: 'SPAIN HOCKEY HWC 2026 SCHEDULE'. Sub-text reads: 'Official Match Fixtures, Local Timezone Converter & PDF Downloads'. Near the bottom, the website URL is cleanly displayed: 'hockeyworldcup2026schedule.com'. The background features a dramatic, high-speed action shot of a professional male Spanish field hockey player with short hair wearing a bright red jersey with yellow accents on a blue turf pitch. Sleek sports branding, high contrast."
  },
  malaysia: {
    name: "pin-malaysia",
    prompt: "A high-impact vertical Pinterest pin graphic design (2:3 aspect ratio, 1000x1500px). Bold black typography at the top inside a stylized white header bubble reads: 'MALAYSIA HOCKEY HWC 2026 SCHEDULE'. Sub-text reads: 'Official Match Fixtures, Local Timezone Converter & PDF Downloads'. Near the bottom, the website URL is cleanly displayed: 'hockeyworldcup2026schedule.com'. The background features a dramatic, high-speed action shot of a professional male Malaysian field hockey player with short hair wearing a yellow and black striped jersey on a blue turf pitch. Sleek sports branding, high contrast."
  },
  argentina: {
    name: "pin-argentina",
    prompt: "A high-impact vertical Pinterest pin graphic design (2:3 aspect ratio, 1000x1500px). Bold black typography at the top inside a stylized white header bubble reads: 'ARGENTINA HOCKEY HWC 2026 SCHEDULE'. Sub-text reads: 'Official Match Fixtures, Local Timezone Converter & PDF Downloads'. Near the bottom, the website URL is cleanly displayed: 'hockeyworldcup2026schedule.com'. The background features a dramatic, high-speed action shot of a professional male Argentinian field hockey player with short hair wearing a light blue and white vertically striped jersey on a blue turf pitch. Sleek sports branding, high contrast."
  },
  england: {
    name: "pin-england",
    prompt: "A high-impact vertical Pinterest pin graphic design (2:3 aspect ratio, 1000x1500px). Bold black typography at the top inside a stylized white header bubble reads: 'ENGLAND HOCKEY HWC 2026 SCHEDULE'. Sub-text reads: 'Official Match Fixtures, Local Timezone Converter & PDF Downloads'. Near the bottom, the website URL is cleanly displayed: 'hockeyworldcup2026schedule.com'. The background features a dramatic, high-speed action shot of a professional male English field hockey player with short hair wearing a white jersey on a blue turf pitch. Sleek sports branding, high contrast."
  }
};

console.log("Ready to generate once the 4-hour quota resets! Prompt list is verified.");
