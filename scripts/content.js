/**
 * 
 * Although this wasn't written by AI, this code/skeleton app exists as an introduction to AI and ChatGPT-3
 * If you want to know how to how it works, copy and paste the code into ChatGPT-3 and see what happens.
 * If you want to know how to make a Chrome Extension, ask ChatGPT-3
 * If you want to take this Skeleton and make a full blown Chrome Extension, ask ChatGPT-3
 * I think you get the point.
 * Thanks
 * Rohan
 * 
 */

window.onscroll = function (e) {
    const supplementaryInfo = document.querySelectorAll(".update-components-actor__supplementary-actor-info");
    const connections = ['2nd', '3rd', '3rd+'];

    for (const i = 0; i < supplementaryInfo.length; i++) {
        let element = supplementaryInfo[i];
        if (element.innerText) {
            let textx = element.innerText;
            let divContainerParentParentParentParent = element.parentNode.parentNode.parentNode.parentNode.parentNode;
            for (const j = 0; j < connections.length; j++) {
                if (textx.includes(connections[j])) {
                    divContainerParentParentParentParent.style.display = "none";
                }
            }
        }
    }
} 
