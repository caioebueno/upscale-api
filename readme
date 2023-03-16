# Upscale API

This is a tool to validate data that was provided to your API.

## Usage

1. Create a file named `api.json` in the root of your project.
2. Config the `api.json` file to match your endpoints and the validations that you need to perform.
``
{
	"/routepath": {
		"GET": [
			{
				"name": "parameter name",
				"type": "STRING",
				"required": true,
				"location": "query"
			}
		]
	}
}
``
3. Add the `Express` middleware to you server
``
import * as express from 'express'
import { createServer } from 'http'
import { verifyExpressInformation } from 'upscale-api'

const app = express()
const PORT = 8888

app.use(express.json())

app.use(verifyExpressInformation)

const server = createServer(app)

server.listen(PORT)
``
3. Fetch your API, if any errors are detected it will contain in the API response.
