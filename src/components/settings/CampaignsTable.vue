<template>
  <b-card header="Campaigns">
    <h4>View Promo</h4>
    <div>
      <b-button variant="success" size="sm" class="mb-3" @click="campaignCreate(1)">Create</b-button>
    </div>

    <b-table :items="viewCampaigns" :fields="fields">
      <template #cell(index)="row">
        {{ row.index + 1 }}
      </template>
      <template #cell(actions)="row">
        <b-button variant="primary" size="sm" class="mr-1" @click="campaignEdit(row.item.id)">
          <b-icon-pencil/>
        </b-button>
        <b-button variant="danger" size="sm" @click="showDeleteModal(row.item.id)">
          <b-icon-trash/>
        </b-button>
      </template>
    </b-table>

    <h4>Claiming Promo</h4>
    <div>
      <b-button variant="success" size="sm" class="mb-3" @click="campaignCreate(2)">Create</b-button>
    </div>

    <b-table :items="claimingCampaigns" :fields="fields">
      <template #cell(index)="row">
        {{ row.index + 1 }}
      </template>
      <template #cell(actions)="row">
        <b-button variant="primary" size="sm" class="mr-1" @click="campaignEdit(row.item.id)">
          <b-icon-pencil/>
        </b-button>
        <b-button variant="danger" size="sm" @click="showDeleteModal(row.item.id)">
          <b-icon-trash/>
        </b-button>
      </template>
    </b-table>
	
    <h4>Nominations Promo</h4>
    <div>
      <b-button variant="success" size="sm" class="mb-3" @click="campaignCreate(3)">Create</b-button>
    </div>

    <b-table :items="nominationsCampaigns" :fields="fields">
      <template #cell(index)="row">
        {{ row.index + 1 }}
      </template>
      <template #cell(actions)="row">
        <b-button variant="primary" size="sm" class="mr-1" @click="campaignEdit(row.item.id)">
          <b-icon-pencil/>
        </b-button>
        <b-button variant="danger" size="sm" @click="showDeleteModal(row.item.id)">
          <b-icon-trash/>
        </b-button>
      </template>
    </b-table>	
	
    <h4>Votings Promo</h4>
    <div>
      <b-button variant="success" size="sm" class="mb-3" @click="campaignCreate(4)">Create</b-button>
    </div>

    <b-table :items="votingsCampaigns" :fields="fields">
      <template #cell(index)="row">
        {{ row.index + 1 }}
      </template>
      <template #cell(actions)="row">
        <b-button variant="primary" size="sm" class="mr-1" @click="campaignEdit(row.item.id)">
          <b-icon-pencil/>
        </b-button>
        <b-button variant="danger" size="sm" @click="showDeleteModal(row.item.id)">
          <b-icon-trash/>
        </b-button>
      </template>
    </b-table>
	
    <h4>Peeps Nomination Promo</h4>
    <div>
      <b-button variant="success" size="sm" class="mb-3" @click="campaignCreate(5)">Create</b-button>
    </div>

    <b-table :items="pnominationsCampaigns" :fields="fields">
      <template #cell(index)="row">
        {{ row.index + 1 }}
      </template>
      <template #cell(actions)="row">
        <b-button variant="primary" size="sm" class="mr-1" @click="campaignEdit(row.item.id)">
          <b-icon-pencil/>
        </b-button>
        <b-button variant="danger" size="sm" @click="showDeleteModal(row.item.id)">
          <b-icon-trash/>
        </b-button>
      </template>
    </b-table>	
	
    <h4>Peeps Voting Promo</h4>
    <div>
      <b-button variant="success" size="sm" class="mb-3" @click="campaignCreate(6)">Create</b-button>
    </div>

    <b-table :items="pvotingsCampaigns" :fields="fields">
      <template #cell(index)="row">
        {{ row.index + 1 }}
      </template>
      <template #cell(actions)="row">
        <b-button variant="primary" size="sm" class="mr-1" @click="campaignEdit(row.item.id)">
          <b-icon-pencil/>
        </b-button>
        <b-button variant="danger" size="sm" @click="showDeleteModal(row.item.id)">
          <b-icon-trash/>
        </b-button>
      </template>
    </b-table>	

    <h4>Process Promo</h4>
    <div>
      <b-button variant="success" size="sm" class="mb-3" @click="campaignCreate(7)">Create</b-button>
    </div>

    <b-table :items="processCampaigns" :fields="fields">
      <template #cell(index)="row">
        {{ row.index + 1 }}
      </template>
      <template #cell(actions)="row">
        <b-button variant="primary" size="sm" class="mr-1" @click="campaignEdit(row.item.id)">
          <b-icon-pencil/>
        </b-button>
        <b-button variant="danger" size="sm" @click="showDeleteModal(row.item.id)">
          <b-icon-trash/>
        </b-button>
      </template>
    </b-table>	

    <b-modal @ok="destroyCampaign" ref="deleteModal">
      Are you sure that you want to delete campaign ?
    </b-modal>
  </b-card>
</template>
<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      viewCampaigns: [],
      claimingCampaigns: [],
      nominationsCampaigns: [],
      votingsCampaigns: [],
      pnominationsCampaigns: [],
      pvotingsCampaigns: [],	  
      processCampaigns: [],	  
      fields: [
        {key: 'index'},
        {key: 'name'},
        {key: 'description'},
        {key: 'timer'},
        {key: 'actions'}
      ]
    }
  },

  mounted() {
    this.fetchCampaigns(1);
    this.fetchCampaigns(2);
    this.fetchCampaigns(3);
    this.fetchCampaigns(4);
    this.fetchCampaigns(5);
    this.fetchCampaigns(6);	
    this.fetchCampaigns(7);	
  },

  methods: {
    ...mapActions({
      editCampaign: 'dialogs/campaign/edit',
      createCampaign: 'dialogs/campaign/create'
    }),

    campaignCreate(type) {
      this.createCampaign(type).then(() => {
        this.fetchCampaigns(type);
      })
    },

    fetchCampaigns(type) {
      this.$api.adsCampaigns.fetch(1, {'type': type}).then(response => {
        if (type == 1) {
          this.viewCampaigns = response.data.data 
        } else if (type == 2) {
          this.claimingCampaigns = response.data.data
        } else if (type == 3) {
          this.nominationsCampaigns = response.data.data 
        } else if (type == 4) {
          this.votingsCampaigns = response.data.data
        } else if (type == 5) {
          this.pnominationsCampaigns = response.data.data 
        } else if (type == 6) {
          this.pvotingsCampaigns = response.data.data		
        } else if (type == 7) {
          this.processCampaigns = response.data.data
        }       		
      })
    },

    campaignDestroy(id) {
      this.$api.campaign.delete(id).then(() => {
        this.fetchCampaigns()
      })
    },

    campaignEdit(id) {
      this.editCampaign(id).then(() => {
        this.fetchCampaigns(1);
        this.fetchCampaigns(2);
        this.fetchCampaigns(3);
        this.fetchCampaigns(4);
		this.fetchCampaigns(5);
		this.fetchCampaigns(6);		
        this.fetchCampaigns(7);		
      })
    },

    showDeleteModal(id) {
      this.deletableId = id;
      this.$refs['deleteModal'].show();
    },

    destroyCampaign() {
      this.$api.adsCampaigns.delete(this.deletableId).then(() => {
        this.fetchCampaigns(1);
        this.fetchCampaigns(2);
        this.fetchCampaigns(3);
        this.fetchCampaigns(4);
		this.fetchCampaigns(5);
		this.fetchCampaigns(6);		
        this.fetchCampaigns(7);		
        this.deletableId = null;
      })
    },
  }
}
</script>