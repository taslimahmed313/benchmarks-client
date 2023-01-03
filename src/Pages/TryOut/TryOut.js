import React from 'react';

const TryOut = () => {
    const countries = [
        {
            country: "Bangladesh",
            divisions: ["Dhaka", "Mymensingh", "Khulna", "Rajshahi"],
            dhaka: ["Madaripur", "Manikgonj", "Shoriyotpur"],
            mymensingh: ["Netrokona", "Jamalpur", "Sherpur"],
            khulna: ["Magura", "Priojpur", "Bagherhut"],
            rajshahi: ["Sirajgonj", "Chapainobabgonj"]
        }
    ]


    // function filterFunction() {
    //   var input, filter, ul, li, a, i;
    //   input = document.getElementById("myInput");
    //   filter = input.value.toUpperCase();
    //   div = document.getElementById("myDropdown");
    //   a = div.getElementsByTagName("a");
    //   for (i = 0; i < a.length; i++) {
    //     txtValue = a[i].textContent || a[i].innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //       a[i].style.display = "";
    //     } else {
    //       a[i].style.display = "none";
    //     }
    //   }
    // }
    return (
      <div>
        {countries.map((c) => (
          <div>
            {c.country === "Bangladesh" && (
              <select>
                <option value={c.country}>{c.country}</option>
              </select>
            )}
          </div>
        ))}
      </div>
    );
};

export default TryOut;