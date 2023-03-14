import { Request, Response } from "express";

export class ProjectController {
  public getAllprojects(req: Request, res: Response) {
    // Get all projects
    const data = {
      projects: [
        {
          id: 1,
          name: "Johnson - Kutch",
          description:
            "Fully-configurable intermediate framework. Ullam occaecati libero laudantium nihil voluptas omnis.",
          imageUrl: "/assets/placeimg_500_300_arch4.jpg",
          contractTypeId: 3,
          contractSignedOn: "2013-08-04T22:39:41.473Z",
          budget: 54637,
          isActive: false,
        },
        {
          id: 2,
          name: "Wisozk Group",
          description:
            "Centralized interactive application. Exercitationem nulla ut ipsam vero quasi enim quos doloribus voluptatibus.",
          imageUrl: "/assets/placeimg_500_300_arch1.jpg",
          contractTypeId: 4,
          contractSignedOn: "2012-08-06T21:21:31.419Z",
          budget: 91638,
          isActive: true,
        },
        {
          id: 3,
          name: "Denesik LLC",
          description:
            "Re-contextualized dynamic moratorium. Aut nulla soluta numquam qui dolor architecto et facere dolores.",
          imageUrl: "/assets/placeimg_500_300_arch12.jpg",
          contractTypeId: 6,
          contractSignedOn: "2016-06-26T18:24:01.706Z",
          budget: 29729,
          isActive: true,
        },
        {
          id: 4,
          name: "Purdy, Keeling and Smitham",
          description:
            "Innovative 6th generation model. Perferendis libero qui iusto et ullam cum sint molestias vel.",
          imageUrl: "/assets/placeimg_500_300_arch5.jpg",
          contractTypeId: 4,
          contractSignedOn: "2013-05-26T01:10:42.344Z",
          budget: 45660,
          isActive: true,
        },
        {
          id: 5,
          name: "Kreigeraa - Waelchi",
          description:
            "Managed logistical migration. Qui quod praesentium accusamus eos hic non error modi et.",
          imageUrl: "/assets/placeimg_500_300_arch12.jpg",
          contractTypeId: 2,
          contractSignedOn: "2009-12-18T21:46:47.944Z",
          budget: 81188,
          isActive: true,
        },
        {
          id: 6,
          name: "Lesch - Waelchi",
          description:
            "Profound mobile project. Rem consequatur laborum explicabo sint odit et illo voluptas expedita.",
          imageUrl: "/assets/placeimg_500_300_arch1.jpg",
          contractTypeId: 3,
          contractSignedOn: "2016-09-23T21:27:25.035Z",
          budget: 53407,
          isActive: false,
        },
      ],
    };

    res.send(data.projects);
  }

  public createproject(req: Request, res: Response) {
    // Create a new project
    const { name, email } = req.body;
    res.send(`Create a new project with name ${name} and email ${email}`);
  }

  public getprojectById(req: Request, res: Response) {
    // Get a single project by ID
    const { id } = req.params;
    const data = {
      projects: [
        {
          id: 1,
          name: "Johnson - Kutch",
          description:
            "Fully-configurable intermediate framework. Ullam occaecati libero laudantium nihil voluptas omnis.",
          imageUrl: "/assets/placeimg_500_300_arch4.jpg",
          contractTypeId: 3,
          contractSignedOn: "2013-08-04T22:39:41.473Z",
          budget: 54637,
          isActive: false,
        },
        {
          id: 2,
          name: "Wisozk Group",
          description:
            "Centralized interactive application. Exercitationem nulla ut ipsam vero quasi enim quos doloribus voluptatibus.",
          imageUrl: "/assets/placeimg_500_300_arch1.jpg",
          contractTypeId: 4,
          contractSignedOn: "2012-08-06T21:21:31.419Z",
          budget: 91638,
          isActive: true,
        },
        {
          id: 3,
          name: "Denesik LLC",
          description:
            "Re-contextualized dynamic moratorium. Aut nulla soluta numquam qui dolor architecto et facere dolores.",
          imageUrl: "/assets/placeimg_500_300_arch12.jpg",
          contractTypeId: 6,
          contractSignedOn: "2016-06-26T18:24:01.706Z",
          budget: 29729,
          isActive: true,
        },
        {
          id: 4,
          name: "Purdy, Keeling and Smitham",
          description:
            "Innovative 6th generation model. Perferendis libero qui iusto et ullam cum sint molestias vel.",
          imageUrl: "/assets/placeimg_500_300_arch5.jpg",
          contractTypeId: 4,
          contractSignedOn: "2013-05-26T01:10:42.344Z",
          budget: 45660,
          isActive: true,
        },
        {
          id: 5,
          name: "Kreigeraa - Waelchi",
          description:
            "Managed logistical migration. Qui quod praesentium accusamus eos hic non error modi et.",
          imageUrl: "/assets/placeimg_500_300_arch12.jpg",
          contractTypeId: 2,
          contractSignedOn: "2009-12-18T21:46:47.944Z",
          budget: 81188,
          isActive: true,
        },
        {
          id: 6,
          name: "Lesch - Waelchi",
          description:
            "Profound mobile project. Rem consequatur laborum explicabo sint odit et illo voluptas expedita.",
          imageUrl: "/assets/placeimg_500_300_arch1.jpg",
          contractTypeId: 3,
          contractSignedOn: "2016-09-23T21:27:25.035Z",
          budget: 53407,
          isActive: false,
        },
      ],
    };

    res.send(data.projects.find((item) => item.id === Number(id)));
  }

  public updateprojectById(req: Request, res: Response) {
    // Update a single project by ID
    const { id } = req.params;
    const { name, email } = req.body;
    res.send(
      `Update project with ID ${id} to have name ${name} and email ${email}`
    );
  }

  public deleteprojectById(req: Request, res: Response) {
    // Delete a single project by ID
    const { id } = req.params;
    res.send(`Delete project with ID ${id}`);
  }
}
