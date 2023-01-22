const panelWidthColorBond = 3;
const postSpacingColorBond = 6;
const panelWidthPool = 4;
const postSpacingPool = 8;
const panelAccessories = 2;
const postAccessories = 4;
const railCount = 2;
const cPostCount = 1;
const capCount = 1;
const screwCount = 8;
const bracketCount = 4;
const gateCount = 1;

function fencingCalculator(length, height, material) {
  let fencePanels,
    posts,
    accessories,
    rails,
    cPosts,
    caps,
    screws,
    brackets,
    gates,
    totalAmount;

  if (material === 'color bond') {
    totalAmount= length*height*20
    fencePanels = Math.ceil(length / panelWidthColorBond);
    posts = Math.ceil(length / postSpacingColorBond + 1);
    rails = fencePanels * railCount;
    screws = fencePanels * screwCount;
    brackets = fencePanels * bracketCount;
  } else if (material === 'pool') {
    totalAmount= length*height*25
    fencePanels = Math.ceil(length / panelWidthPool);
    posts = Math.ceil(length / postSpacingPool);
    rails = fencePanels * railCount;
    screws = fencePanels * screwCount;
    brackets = fencePanels * bracketCount;
  } else {
    console.log('Invalid material type');
    return;
  }

  accessories = fencePanels * panelAccessories + posts * postAccessories;
  cPosts = posts * cPostCount;
  caps = posts * capCount;
  gates = Math.ceil(length / 50) * gateCount;

  return {
    fencePanels,
    posts,
    accessories,
    rails,
    cPosts,
    caps,
    screws,
    brackets,
    gates,
    totalAmount
  };
}

function calculateMaterials() {
  let length = document.getElementById('length').value;
  let height = document.getElementById('height').value;
  let material = document.getElementById('material').value;
  let materialsList = fencingCalculator(length, height, material);

  let output = '';
  output += `<h2>Materials List</h2>`;
  output += `<h3>Fence Panels: ${materialsList.fencePanels} </h3>`;
  output += `<h3>Posts:  ${materialsList.posts} </h3>`;
  output += `<h3>Accessories:  ${materialsList.accessories} </h3>`;
  output += `<h3>Rails:  ${materialsList.rails}</h3>`;
  output += `<h3>C-Posts:  ${materialsList.cPosts} </h3>`;
  output += `<h3>Caps:  ${materialsList.caps} </h3>`;
  output += `<h3>Screws:  ${materialsList.screws} </h3>`;
  output += `<h3>Brackets:  ${materialsList.brackets} </h3>`;
  output += `<h3>Gates:  ${materialsList.gates} </h3>`;
  output += `<h2>TotalAmount:  ${materialsList.totalAmount} </h2>`;
  document.getElementById('output').style.display = 'block';
  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML = output;
}
