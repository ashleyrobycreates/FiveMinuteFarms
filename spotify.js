// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQBYHOuJiEQB3mflUZVgtXDHWn9UoAnXmnkPyphi8T1Eqm2pTqE3ZD7XNUZ0RyaaR_QK7B_Dr2igSRnLmTG2nHAI8mM1M-rtz6vKb84l22wvrQvpwSTdqSI43h58bVcoxp_XPAYnfVUduYt4RqIQg9N8OxEQ3LndlwxARDUd_VvtnXF2wB9A-cODsD_vhDnwzaJNFc2w5oa3m2Ew0XtIrc2wtnLXR7W1Lg0a0M0l88WzilDaN_9YQrSIhyzCB4EYNmdNlRhj6jrrQV7s2791tayM046bfw';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);