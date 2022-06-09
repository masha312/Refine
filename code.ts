const nodes: SceneNode[] = [];

// Create and name all pages
figma.currentPage.name = "💎 HiFi [date] → [description]";
figma.createPage().name = "----";
figma.createPage().name = "✏️ WIP [date] → [description]";
figma.createPage().name = "----";
let gettingStartedPage = figma.createPage();
gettingStartedPage.name = "Geting started";
figma.createPage().name = "----";
figma.createPage().name = "🗑 Archive";
figma.currentPage = gettingStartedPage;

// Set up getting started page
setUpGettingStarted();

async function setUpGettingStarted() {
  let gettingStartedComponent = await figma.importComponentByKeyAsync(
    "<YOUR COMPONENT KEY HERE>"
  );

  let gettingStartedInstance = gettingStartedComponent.createInstance();
  figma.currentPage.appendChild(gettingStartedInstance);
  let gettingStartedFrame = gettingStartedInstance.detachInstance();
  nodes.push(gettingStartedFrame);
  figma.viewport.scrollAndZoomIntoView(nodes);

  let children = gettingStartedFrame.children;
  let numOfChildren = children.length;
  while (numOfChildren > 0) {
    figma.currentPage.appendChild(children[numOfChildren - 1]);
    numOfChildren--;
  }

  gettingStartedFrame.remove();

  figma.closePlugin("✨ File is ready!");
}
