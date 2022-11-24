      const awsmobile = {
        aws_project_region : "us-east-1",
        aws_cognito_identity_pool_id : "us-east-1:829c6a41-5e78-4fae-b598-8192b13f36c4",
        aws_cognito_region : "us-east-1",
        aws_user_pools_id : "us-east-1_KsIwP2Mcq",
        aws_user_pools_web_client_id : "504u0bfevcp2sktt4m185mff20",
        oauth : {
          domain : "auth.staging.electives.io",
          scope : ["phone", "email", "openid", "profile", "aws.cognito.signin.user.admin"],
          redirectSignIn : "http://localhost:3000/",
          redirectSignOut : "http://localhost:3000/",
          responseType : "code"
        },
        federationTarget : "COGNITO_USER_POOLS",
        aws_cognito_username_attributes : ["EMAIL"],
        aws_cognito_social_providers : [],
        aws_cognito_signup_attributes : ["EMAIL"],
        aws_cognito_mfa_configuration : "OFF",
        aws_cognito_mfa_types : ["SMS"],
        aws_cognito_password_protection_settings : {
          passwordPolicyMinLength : 8,
          passwordPolicyCharacters : []
        },
        aws_cognito_verification_mechanisms : ["EMAIL"],
        aws_cloud_logic_custom : 
        [
          
          {
            "endpoint": "https://adminqueries.staging.electives.io",
            "name": "AdminQueries",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://blog.staging.electives.io",
            "name": "coreAPIBlog",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://classregistration.staging.electives.io",
            "name": "coreAPIClassRegistration",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://courselistproposal.staging.electives.io",
            "name": "coreAPICourseListProposal",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://emailservice.staging.electives.io",
            "name": "coreAPIEmailService",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://events.staging.electives.io",
            "name": "coreAPIEvents",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://forms.staging.electives.io",
            "name": "coreAPIForms",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://instructorcourse.staging.electives.io",
            "name": "coreAPIInstructorCourse",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://instructorinvitations.staging.electives.io",
            "name": "coreAPIInstructorInvitations",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://instructorprofile.staging.electives.io",
            "name": "coreAPIInstructorProfile",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://lists.staging.electives.io",
            "name": "coreAPILists",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://mediaconvert.staging.electives.io",
            "name": "coreAPIMediaConvert",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://news.staging.electives.io",
            "name": "coreAPINews",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://orgmemberinvitations.staging.electives.io",
            "name": "coreAPIOrgMemberInvitations",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://orgs.staging.electives.io",
            "name": "coreAPIOrgs",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://podwaves.staging.electives.io",
            "name": "coreAPIPodWaves",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://recommendations.staging.electives.io",
            "name": "coreAPIRecommendations",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://search.staging.electives.io",
            "name": "coreAPISearch",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://searchindexrebuild.staging.electives.io",
            "name": "coreAPISearchIndexRebuild",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://slack.staging.electives.io",
            "name": "coreAPISlack",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://survey.staging.electives.io",
            "name": "coreAPISurvey",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://usergroupassignment.staging.electives.io",
            "name": "coreAPIUserGroupAssignment",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://uilogs.staging.electives.io",
            "name": "coreAPIUiLogs",
            "region": "us-east-1"
          },
          
          {
            "endpoint": "https://graphql.staging.electives.io",
            "name": "coreAPIGraphql",
            "region": "us-east-1"
          },
          
        ],
        aws_content_delivery_bucket : "code-static-content-hostingbucket-sboxe",
        aws_content_delivery_bucket_region : "us-east-1",
        aws_content_delivery_url : "d2l67ylkunowvr.cloudfront.net",
        aws_dynamodb_all_tables_region : "us-east-1",
        aws_dynamodb_table_schemas :
        [
          
          {
            "tableName": "ddbBlog-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbClassRegistration-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbCourseList-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbCourseListProposal-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbEventRegistrationStats-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbEventWaves-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbEvents-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbForms-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbInstructorCourse-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbInstructorInvitations-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbInstructorProfile-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbNews-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbNotifications-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbOrgMember-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbOrgMemberGroups-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbOrgMemberInvitations-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbOrgs-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbPodWaves-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbProposedEvents-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbRecommendations-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbSlackMagicLink-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbSlackOrgSettings-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbSurveyResponses-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbSurveys-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbUserGroups-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbUserTermsAndConditions-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbVersion-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbW9Contacts-staging",
            "region": "us-east-1"
          },
          
          {
            "tableName": "ddbConferences-staging",
            "region": "us-east-1"
          },
          
        ],
        aws_user_files_s3_bucket : "s3electivesiomedia-staging",
        aws_user_files_s3_bucket_region : "us-east-1",
        aws_mobile_analytics_app_id : "f41075661db44120adb7748dd783c4a9",
        aws_mobile_analytics_app_region : "us-east-1",
      } 
      export default awsmobile;
