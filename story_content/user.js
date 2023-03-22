function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6rhab3GOV2i":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxK6CkjjEwRzGTyDDDEVHN6qvk_hbarzRcuyqLMuNGXHUOQITroFVqDPf4IjpK-mp0M4Q/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

