
// maps name to key for indexing or sorting
export const mapIndex = {
    "Check ra dec rms": 0,
    "Basic data reduction": 1,
    "Subtract Background and generate source cat": 2,
    "Assign Refrence": 3,
    "Align ref to sci and propogate wcs from ref to sci": 4,
    "Run Sfft Subtraction": 5,
    "Extract sources from difference image": 6,
    "Grabbing catalogs for this region of sky": 7,
    "Filter out candidates close to stars": 8,
    "Calculate zeropoint of image": 9,
    "Calculate real-bogus score for candidates": 10,
    "candidate_logging": 11,
    "skyportal_logging": 12,
    "save_image": 13,
}

// sort by index above
export const sortByIndex = (a, b) => {
    const aValue = mapIndex[a[1]];
    const bValue = mapIndex[b[1]];
    return aValue - bValue;
  };


// dataTemplate for graphs
export const dataTemplate = [
    {display: "Check Ra Dec RMS",       actual: "Check ra dec rms",                                     end: 0},
    {display: "Data Reduction",         actual: "Basic data reduction",                                 end: 0},
    {display: "Subtract Background",    actual: "Subtract Background and generate source cat",          end: 0},
    {display: "Assign Refrence",        actual: "Assign Refrence",                                      end: 0},
    {display: "Align Refrence",         actual: "Align ref to sci and propogate wcs from ref to sci",   end: 0},
    {display: "Image Subtraction",      actual: "Run Sfft Subtraction'",                                end: 0},
    {display: "Extract sources",        actual: "Extract sources from difference image",                end: 0},
    {display: "Get Catalogs",           actual: "Grabbing catalogs for this region of sky",             end: 0},
    {display: "Filter",                 actual: "Filter out candidates close to stars",                 end: 0},
    {display: "Calculate Zeropoint",    actual: "Calculate zeropoint of image",                         end: 0},
    {display: "Calculate Real-Bogus",   actual: "Calculate real-bogus score for candidates",            end: 0},
    {display: "Candidate Logging",      actual: "candidate_logging",                                    end: 0},
    {display: "Skyportal Logging",      actual: "skyportal_logging",                                    end: 0},
    {display: "Complete",               actual: "save_image",                                           end: 0},
]

/*
STEPS: (list 1)

Basic data reduction
Subtract Background and generate source cat
Assign Refrence
Align ref to sci and propogate wcs from ref to sci
Run image subtraction'
Extract sources from difference image
Filter out candidates close to stars
Calculate zeropoint of image
Calculate real-bogus score for candidates
candidate_logging
skyportal_logging
save_image

STEPS: (list 2)
"Check ra dec rms"
"Basic data reduction"
"Subtract Background and generate source cat"
"Assign Refrence'
"Align ref to sci and propogate wcs from ref to sci"
"Run Sfft Subtraction"
"Extract sources from difference image"
"Grabbing catalogs for this region of sky"
"Filter out candidates close to stars"
"Calculate zeropoint of image"
"Calculate real-bogus score for candidates"
"candidate_logging"
"skyportal_logging"
*/

//need to check if names are correct
