// Octokit.js
// https://github.com/octokit/core.js#readme
let saveFile2 = () => {
            // Get the data from each element on the form.
            const name = document.getElementById("txtName");
            const age = document.getElementById("txtAge");
            const email = document.getElementById("txtEmail");
            const country = document.getElementById("selCountry");
            const msg = document.getElementById("msg");

            // This variable stores all the data.
            let data = "\r Name: " + name.value + " \r\n " + "Affiliation: " + age.value + " \r\n " + "Email: " + email.value + " \r\n " + "Keywords: " + country.value + " \r\n " + "Message: " + msg.value;
            console.log(data); //printing form data into the console
            // Convert the text to BLOB.
            const textToBLOB = new Blob([data], { type: "text/plain" });
            var filename = new Date();
            var month =new Date(); //months from 1-12
            month = month.getMonth();

            var day = new Date();
            var day = day.getUTCDate();

            var year = new Date();
            var year = year.getUTCFullYear();

            newdate = year + "/" + month + "/" + day;
            const sFileName = filename; // The file to save the data.

            let newLink = document.createElement("a");
            //newLink.download = new Date();
            newLink.href = "mailto:nilanjandevbhaumik@gmail.com?subject=Comment on the arXiv:xxxx.xxxx entry on PBH Recently Published Papers Page &body=" + encodeURIComponent(data)
            //if (window.webkitURL != null) {
            //    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            //} else {
            //    newLink.href = window.URL.createObjectURL(textToBLOB);
            //    newLink.style.display = "none";
           //     document.body.appendChild(newLink);
           // }

            newLink.click();
            const octokit = new Octokit({
              //auth: 'YOUR-TOKEN'
            })
            
            await octokit.request('POST /repos/ndb0/ndb0.github.io/issues', {
              owner: 'OWNER',
              repo: 'REPO',
              title: 'Comment on the arXiv:xxxx.xxxx entry on PBH Recently Published Papers Page',
              body: 'I\'m having a problem with this.',
              assignees: [
                'octocat'
              ],
              milestone: 1,
              labels: [
                'bug'
              ],
              headers: {
                'X-GitHub-Api-Version': '2022-11-28'
              }
            })
