const SocialNetwork = artifacts.require('./SocialNetwork.sol')

require('chai')
	.use(require('chai-as-promised'))
	.should()

	contract('SocialNetwork', (accounts) => {
		let socialNetwork

		describe('deployment', async () => {
			it('deploys successfully', async () => {
				socialNetwork = await SocialNetwork.deployed() //Await here is VERY important
				const address = await socialNetwork.address
				assert.notEqual(address, 0x0)
				assert.notEqual(address, '')
				assert.notEqual(address, null)
				assert.notEqual(address, undefined)
			})
		})
	})