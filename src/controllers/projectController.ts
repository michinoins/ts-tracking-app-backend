import { Request, Response } from "express";

export class ProjectController {
  public getAllprojects(req: Request, res: Response) {
    // Get all projects
    res.send("Get all projects");
  }

  public createproject(req: Request, res: Response) {
    // Create a new project
    const { name, email } = req.body;
    res.send(`Create a new project with name ${name} and email ${email}`);
  }

  public getprojectById(req: Request, res: Response) {
    // Get a single project by ID
    const { id } = req.params;
    res.send(`Get project with ID ${id}`);
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
